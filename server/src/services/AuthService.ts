import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { loginShcema, registerShcema } from "../utils/validator/auth";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

class AuthService {
  private readonly authRepository: Repository<User> = AppDataSource.getRepository(User);
  async register(req: Request, res: Response) {
    try {
      const { name, username, password, email, phoneNumber } = req.body;
      const { error, value } = registerShcema.validate(req.body);

      if (error) {
        return res.status(404).json(error.details[0].message);
      }

      const checkData = await this.authRepository.count({
        where: {
          email: value.email,
          username: value.username,
          phoneNumber: value.phoneNumber,
        },
      });

      if (checkData > 0) {
        return res.status(400).json("username,email, dan no.telp sudah terdaftar.");
      }

      const encryPassword = await bcrypt.hash(password, 10);

      const user = this.authRepository.create({
        name,
        username,
        email,
        phoneNumber,
        password: encryPassword,
      });

      // console.log("input user", user);
      const NewUser = await this.authRepository.save(user);
      // console.log("new user", NewUser);
      return res.status(200).json(`success insert to DB ${NewUser}`);
    } catch (error) {
      return res.status(200).json({
        message: "Register Error. Plase try again!",
        error: error.message,
      });
    }
  }

  async login(req: Request, res: Response) {
    const sicret = "eannoy";
    try {
      const { email, password } = req.body;
      const { error } = loginShcema.validate(req.body);

      if (error) {
        return res.status(400).json({
          message: "email and password invalid!",
        });
      }

      const checkUser = await this.authRepository.findOne({
        where: { email },
        select: ["id", "name", "username", "password"],
      });
      if (!checkUser) {
        return res.status(400).json({
          message: "email invalid!",
        });
      }

      const checkPassword = await bcrypt.compare(password, checkUser.password);
      if (!checkPassword) {
        return res.status(400).json({
          message: "password invalid!",
        });
      }
      const token = jwt.sign({ checkUser }, sicret, {
        expiresIn: "2h",
      });

      return res.status(200).json({
        message: "login is success!",
        user: {
          id: checkUser.id,
          username: checkUser.username,
          email: checkUser.email,
        },
        token: token,
      });
    } catch (error) {
      return res.status(500).json({
        message: "login is error",
        error,
      });
    }
  }

  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;

      // console.log("login session: ", loginSession);

      const user = await this.authRepository.findOne({
        where: {
          id: loginSession.checkUser.id,
        },
        select: ["id", "name", "username", "password"],
      });
      return res.status(200).json({
        message: "The token is valid!",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "check token is error",
        error,
      });
    }
  }
}
export default new AuthService();

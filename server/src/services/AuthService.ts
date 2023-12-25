import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { registerShcema } from "../utils/validator/auth";
import * as bcrypt from "bcrypt";

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
}
export default new AuthService();

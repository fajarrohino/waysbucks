import { Avatar, Stack, Typography } from "@mui/material";

export default function CardToping() {
  return (
    <Stack alignItems={"center"} spacing={"13px"}>
      <Avatar
        src="https://s3-alpha-sig.figma.com/img/dfda/d843/75a3647d9dec32a2832a4925cff3cdad?Expires=1699833600&Signature=m~r2tSUlrTePHtg9KAOFqg~Cz5EfD8p-vWns6J3IkBjK67ZnSWgOE7kZzNKcZbiDP1V1l0-cF4qN6TQdAJF4-Ya72unKHaM8~gsf9OkRGEQo12h1~NLUBRuN24zzMehmr4LKd-B0P8jGBVMxBa-oaV5EI3Xxi5MvO6sEyZPxGXWj7~R2Twlii~HkvVJ4Ohn8yUHlnco-ThY13jBuCWq3SQiJPpFvgbI84Tt86zzqYwOMUAyKMRIOuwV5kpieAkh8fdXwUpOEV9GQzjeJhNX-LXoDT6z0RbsdK4OzrnrALVTeLGDRKbYx17~eWs1iFZHfnq9Zt0oB~ddwo1T300qh1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        sx={{ width: 85, height: 75 }}
      />
      <Typography color="#974A4A" sx={{ fontSize: "14px", fontWeight: "400" }} pt={"6px"}>
        Bubble Tea Gelatin
      </Typography>
    </Stack>
  );
}

// ** React Imports
import { useState, SyntheticEvent, ChangeEvent, ElementType } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

// ** Third Party Imports
import { useDropzone } from "react-dropzone";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

interface FileProp {
  name: string;
  type: string;
  size: number;
}

const ImgStyled = styled("img")(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
}));

// Styled component for the upload image inside the dropzone area
// const Img = styled("img")(({ theme }) => ({
//   [theme.breakpoints.up("md")]: {
//     marginRight: theme.spacing(10),
//   },
//   [theme.breakpoints.down("md")]: {
//     marginBottom: theme.spacing(4),
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: 250,
//   },
// }));

// Styled component for the heading inside the dropzone area
// const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
//   marginBottom: theme.spacing(5),
//   [theme.breakpoints.down("sm")]: {
//     marginBottom: theme.spacing(4),
//   },
// }));

const ButtonStyled = styled(Button)<
  ButtonProps & { component?: ElementType; htmlFor?: string }
>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
}));

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
}));

const onSubmit = async () => {};

const Documents = ({ handleBack, handleNext, activeStep, steps }) => {
  // ** State
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const [files, setFiles] = useState<File[]>([]);
  const [imgSrc, setImgSrc] = useState<string>("/images/avatars/1.png");
  const [inputValue, setInputValue] = useState<string>("");

  console.log("Selected file is", imgSrc);

  const handleInputImageChange = (file: ChangeEvent) => {
    const reader = new FileReader();
    const { files } = file.target as HTMLInputElement;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string);
      reader.readAsDataURL(files[0]);

      if (reader.result !== null) {
        setInputValue(reader.result as string);
      }
    }
  };
  const handleInputImageReset = () => {
    setInputValue("");
    setImgSrc("/images/avatars/1.png");
  };

  // ** Hook
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)));
    },
  });

  //   const handleLinkClick = (event: SyntheticEvent) => {
  //     event.preventDefault();
  //   };

  //   const img = files.map((file: FileProp) => (
  //     <img
  //       key={file.name}
  //       alt={file.name}
  //       className="single-file-image"
  //       src={URL.createObjectURL(file as any)}
  //     />
  //   ));

  const checkingEmpty = () => {
    if (!files) {
      return false;
    } else {
      return true;
    }
  };

  return (
    // <CardContent>
    //   <Grid container>
    //     <Grid item className="">
    //       <Box
    //         {...getRootProps({ className: "dropzone" })}
    //         sx={files.length ? { height: 450 } : {}}
    //       >
    //         <input {...getInputProps()} />
    //         {files.length ? (
    //           img
    //         ) : (
    //           <Box className="w-[200px]">
    //             <Img
    //               width={100}
    //               alt="Upload img"
    //               src="/demo/materialize-mui-react-nextjs-admin-template/demo-1/images/misc/upload.png"
    //             />
    //             <Box>
    //               <HeadingTypography variant="h5">
    //                 Drop files here or click to upload.
    //               </HeadingTypography>
    //               <Typography color="textSecondary">
    //                 Drop files here or click{" "}
    //                 <Link href="/" onClick={handleLinkClick}>
    //                   browse
    //                 </Link>{" "}
    //                 thorough your machine
    //               </Typography>
    //             </Box>
    //           </Box>
    //         )}
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </CardContent>

    <Grid container>
      <Grid item xs={12}>
        <CardHeader title="Passport size photo" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImgStyled src={imgSrc} alt="Passport size photo" />
            <div>
              <ButtonStyled
                component="label"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                Upload Photo
                <input
                  hidden
                  type="file"
                  value={inputValue}
                  accept="image/png, image/jpeg"
                  onChange={handleInputImageChange}
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
              <ResetButtonStyled
                color="secondary"
                variant="outlined"
                onClick={handleInputImageReset}
              >
                Reset
              </ResetButtonStyled>
              <Typography sx={{ mt: 5, color: "text.disabled" }}>
                Allowed PNG or JPEG. Max size of 800K.
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={12}>
        <CardHeader
          title="10th Marksheet
"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImgStyled src={imgSrc} alt="10th Marksheet" />
            <div>
              <ButtonStyled
                component="label"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                Upload Document
                <input
                  hidden
                  type="file"
                  value={inputValue}
                  accept="image/png, image/jpeg"
                  onChange={handleInputImageChange}
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
              <ResetButtonStyled
                color="secondary"
                variant="outlined"
                onClick={handleInputImageReset}
              >
                Reset
              </ResetButtonStyled>
              <Typography sx={{ mt: 5, color: "text.disabled" }}>
                Allowed PNG or JPEG. Max size of 800K.
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={12}>
        <CardHeader title="12th Marksheet/ Diploma marksheet" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImgStyled src={imgSrc} alt="12th Marksheet/ Diploma marksheet" />
            <div>
              <ButtonStyled
                component="label"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                Upload Document
                <input
                  hidden
                  type="file"
                  value={inputValue}
                  accept="image/png, image/jpeg"
                  onChange={handleInputImageChange}
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
              <ResetButtonStyled
                color="secondary"
                variant="outlined"
                onClick={handleInputImageReset}
              >
                Reset
              </ResetButtonStyled>
              <Typography sx={{ mt: 5, color: "text.disabled" }}>
                Allowed PNG or JPEG. Max size of 800K.
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={12}>
        <CardHeader title="Graduation Marksheets All Semester" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImgStyled src={imgSrc} alt="Graduation Marksheets All Semester" />
            <div>
              <ButtonStyled
                component="label"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                Upload Document
                <input
                  hidden
                  type="file"
                  value={inputValue}
                  accept="image/png, image/jpeg"
                  onChange={handleInputImageChange}
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
              <ResetButtonStyled
                color="secondary"
                variant="outlined"
                onClick={handleInputImageReset}
              >
                Reset
              </ResetButtonStyled>
              <Typography sx={{ mt: 5, color: "text.disabled" }}>
                Allowed PNG or JPEG. Max size of 800K.
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={12}>
        <CardHeader title="Post-Graduation Marksheets" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImgStyled src={imgSrc} alt="Post-Graduation Marksheets" />
            <div>
              <ButtonStyled
                component="label"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                Upload Document
                <input
                  hidden
                  type="file"
                  value={inputValue}
                  accept="image/png, image/jpeg"
                  onChange={handleInputImageChange}
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
              <ResetButtonStyled
                color="secondary"
                variant="outlined"
                onClick={handleInputImageReset}
              >
                Reset
              </ResetButtonStyled>
              <Typography sx={{ mt: 5, color: "text.disabled" }}>
                Allowed PNG or JPEG. Max size of 800K.
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={12}>
        <CardHeader title="Aadhar Card" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImgStyled src={imgSrc} alt="Aadhar Card" />
            <div>
              <ButtonStyled
                component="label"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                Upload Document
                <input
                  hidden
                  type="file"
                  value={inputValue}
                  accept="image/png, image/jpeg"
                  onChange={handleInputImageChange}
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
              <ResetButtonStyled
                color="secondary"
                variant="outlined"
                onClick={handleInputImageReset}
              >
                Reset
              </ResetButtonStyled>
              <Typography sx={{ mt: 5, color: "text.disabled" }}>
                Allowed PNG or JPEG. Max size of 800K.
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={12}>
        <CardHeader title="PAN Card" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImgStyled src={imgSrc} alt="PAN Card" />
            <div>
              <ButtonStyled
                component="label"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                Upload Document
                <input
                  hidden
                  type="file"
                  value={inputValue}
                  accept="image/png, image/jpeg"
                  onChange={handleInputImageChange}
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
              <ResetButtonStyled
                color="secondary"
                variant="outlined"
                onClick={handleInputImageReset}
              >
                Reset
              </ResetButtonStyled>
              <Typography sx={{ mt: 5, color: "text.disabled" }}>
                Allowed PNG or JPEG. Max size of 800K.
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={12}>
        <div className="button-wrapper w-full flex justify-end">
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={() => {
              handleBack();
            }}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              if (!checkingEmpty()) {
                setIsChecking(true);
                console.log("errors are not nill");
              } else {
                handleNext();
                setIsSubmit(true);
                console.log("submitted");
                onSubmit();
              }
            }}
            sx={{ ml: 4 }}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Documents;

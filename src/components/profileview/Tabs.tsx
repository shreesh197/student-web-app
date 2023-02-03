import React, { SyntheticEvent, useState } from "react";
import Container from "./Container";
import { FaUserAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { MdLocationOn, MdPermContactCalendar, MdWork } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { stepNumber } from "../../helper/Stepper";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import TabList from "@mui/lab/TabList";
import Grid from "@mui/material/Grid";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import MuiTabList, { TabListProps } from "@mui/lab/TabList";

const Tabs = ({ setCurrentStep }) => {
  const [activeTab, setActiveTab] = useState("basic details");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .Mui-selected": {
      backgroundColor: "#656dfe",
      color: `${theme.palette.common.white} !important`,
    },
    "& .MuiTab-root": {
      minWidth: 65,
      minHeight: 38,
      borderRadius: theme.shape.borderRadius,
      [theme.breakpoints.up("sm")]: {
        minWidth: 130,
      },
    },
  }));

  const handleChange = (event: SyntheticEvent, value: string) => {
    setIsLoading(true);
    setActiveTab(value);

    // router
    //   .push({
    //     pathname: `/pages/user-profile/${value.toLowerCase()}`,
    //   })
    //   .then(() => setIsLoading(false));
  };

  return (
    <div className="mt-[30px] ">
      <div className="tabs flex gap-6 overflow-x-scroll">
        <TabContext value={activeTab}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TabList
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleChange}
                aria-label="customized tabs example"
              >
                <Tab
                  onClick={() => {
                    setCurrentStep(stepNumber.basicDeteails);
                  }}
                  value="basic details"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...{ "& svg": { mr: 2 } },
                      }}
                    >
                      <Icon icon="mdi:account-outline" />
                      {"Basic"}
                    </Box>
                  }
                />
                <Tab
                  onClick={() => {
                    setCurrentStep(stepNumber.contactDetails);
                  }}
                  value="commincation Details"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...{ "& svg": { mr: 2 } },
                      }}
                    >
                      <Icon icon="mdi:account-multiple-outline" />
                      {"Communication"}
                    </Box>
                  }
                />
                <Tab
                  onClick={() => {
                    setCurrentStep(stepNumber.address);
                  }}
                  value="address"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...{ "& svg": { mr: 2 } },
                      }}
                    >
                      <Icon icon="mdi:view-grid-outline" />
                      {"Address"}
                    </Box>
                  }
                />
                <Tab
                  onClick={() => {
                    setCurrentStep(stepNumber.academicDetails);
                  }}
                  value="academic Details"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...{ "& svg": { mr: 2 } },
                      }}
                    >
                      <Icon icon="mdi:link-variant" />
                      {"Academic"}
                    </Box>
                  }
                />
                <Tab
                  onClick={() => {
                    setCurrentStep(stepNumber.experience);
                  }}
                  value="experience Details"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...{ "& svg": { mr: 2 } },
                      }}
                    >
                      <Icon icon="mdi:link-variant" />
                      {"Experience"}
                    </Box>
                  }
                />
                <Tab
                  onClick={() => {
                    setCurrentStep(stepNumber.tpodetails);
                  }}
                  value="tpo details"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...{ "& svg": { mr: 2 } },
                      }}
                    >
                      <Icon icon="mdi:link-variant" />
                      {"TPO"}
                    </Box>
                  }
                />
                {/* <Tab
                  onClick={() => {
                    setCurrentStep(stepNumber.kodnestdetails);
                  }}
                  value="kodnest details"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...{ "& svg": { mr: 2 } },
                      }}
                    >
                      <Icon icon="mdi:link-variant" />
                      {"KodNest"}
                    </Box>
                  }
                /> */}
              </TabList>
            </Grid>
          </Grid>
        </TabContext>
      </div>
    </div>
  );
};

export default Tabs;

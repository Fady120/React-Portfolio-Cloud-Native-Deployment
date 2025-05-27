import React from 'react';
import ProjectsBlock from "./ProjectsBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Projects({innerRef}) {
    return (
        <Box id={'projects'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.projects.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <ProjectsBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};
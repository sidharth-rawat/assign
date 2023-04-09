import {lazy} from "react";

export const Content = lazy(()=> import('./content.view'))
export const Home = lazy(()=> import('./home.views'))
export const Disclamir =  lazy(()=> import ('./disclamir.view'))
export const About = lazy(()=> import ('./about.view'))
export const Contact = lazy(()=>import('./Contact'))
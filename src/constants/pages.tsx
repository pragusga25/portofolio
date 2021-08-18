import { Home, Contact, Project, About } from '@components/Pages';
import tw from 'twin.macro';

export type Pages = 'home' | 'contact' | 'project' | 'about';
export const pageList: Pages[] = ['home', 'about', 'contact', 'project'];

export const pages = {
  home: { id: 'home', page: <Home />, bgColor: tw`background[#FF4848]` },
  about: { id: 'about', page: <About />, bgColor: tw`background[#FF7600]` },
  project: { id: 'project', page: <Project />, bgColor: tw`background[#1CC5DC]` },
  contact: { id: 'contact', page: <Contact />, bgColor: tw`background[#252525]` },
};

import SectioAboutMe from '@/components/SectioAboutMe/SectionAboutMe';
import SectioContactMe from '@/components/SectioContactMe/SectionContactMe';
import SectionProducts from '@/components/SectionProducts/SectionProducts';
import SectionInstagram from '@/components/SectionInstagram/SectionInstagram';

const Prueba = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <SectioAboutMe/>
      <SectionProducts/>
      <SectioContactMe/>
      <SectionInstagram/>
    </div>
  );
};

export default Prueba;

  




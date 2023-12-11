import style from './hero.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";
import Upload from '../../utils/Progress';
import {getUser} from '../../server/api/User'
import SecondeSection from '../secondeSection/SecondeSection'
gsap.registerPlugin(ScrollTrigger);



function Index({data}:any) {
  const firstRef:any = useRef();
  const secondRef:any = useRef();
  const wrapperRef:any = useRef();
  useEffect(()=>{
    getUser()
      
  },[])
    
    
  useLayoutEffect(() => {
    const ctx = gsap.context((self:any) => {
      const sections:any = self.selector("section");

      const stopPanel = sections.findIndex((section:any) => section.dataset.pin);
      const stopPanel2 = sections.findIndex((section:any) => section.dataset.pin2);

      const tl = gsap
        .timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: true,
            scrub: 0.5,
            end: () => "+=" + wrapperRef.current.offsetWidth
          }
        })
        .to(sections, {
          xPercent: -(100 * stopPanel),
          duration: stopPanel
        })
        .to(firstRef.current, {
          duration: 3,
          scale: 5.5
        })

        .to(sections, {
          xPercent: -(100 * stopPanel2),
          duration: stopPanel2
        })
        .to(secondRef.current, {
          scale: 5.5,
          duration: 3
        })
        .to(sections, {
          xPercent: -(100 * (sections.length - 1)),
          duration: sections.length - stopPanel2
        });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={style.wrapper} ref={wrapperRef}>
      <section className={style.header}>
        {" "}
        <h1>{data}</h1>
        <Upload />
      </section>
      <section className={style.first} data-pin="true">
        <SecondeSection>
        <h2 ref={firstRef}>FIRSTS</h2>
        </SecondeSection>
      </section>
      <section className={style.second} data-pin2="true">
        <h2 ref={secondRef}>SECOND</h2>
      </section>
    </div>
  );
}

export default Index
import Section1 from "./Section1";
import SectionItem1 from "./SectionItem1";


let sectionArray=[
    {sectionTitle:"EXPERIENCE",
    sectionItemCom:[{num:"5", years:"2020-2021"},
    {num:"3.0", years:"2019-2020"},
    {num:"2.0", years:"2018-2019"}],
    isSectionItem: true,
    componentItem:"SectionItem1",
    sectionClass:"section section1"},

    {sectionTitle:"FORMATION",
    sectionItemCom:[{num:"", years:"2017-2018"},
    {num:"3.0", years:"2016-2017"},
    {num:"2.0", years:"2016-2017"}],
    isSectionItem: true,
    componentItem:"SectionItem2",
    sectionClass:"section section2"},

    {sectionTitle:"HOBBIES",
    sectionItem:`Explain the formation's specificities your degree, options...`,
    isSectionItem: false,
    sectionClass:"section section3"},

    {sectionTitle:"PROFILE",
    sectionItem:`Explain in afew lines yourprofessional training, your capabilities and your carrar's objectives`,
    isSectionItem: false,
    sectionClass:"section section4"},

    {sectionTitle:"SKILL",
    sectionItem:`WEB <br/> UI/UX Design <br/> APSET CORE <br/> MS SQL<br/> Github`,
    isSectionItem: false,
    sectionClass:"section section5"},

    {sectionTitle:"PERSONASLITY",
    sectionItem:`Reactive <br/> Ambitious <br/> APSET CORE <br/> Crative<br/> Reliable`,
    isSectionItem: false,
    sectionClass:"section section6"},

    {sectionTitle:"LENGUEGES",
    sectionItem:`Hebrew <br/> English <br/> French`,
    isSectionItem: false,
    sectionClass:"section section7"}
]



function Sections(){
    return <section className="sectionFlex">
    {
    sectionArray.map((thisSection)=>
    
        <Section1
        key={thisSection.sectionClass}
        sectionTitle={thisSection.sectionTitle}
        sectionClass={thisSection.sectionClass}
        sectionItem={thisSection.sectionItem}
 
        />)
    }
    </section>


          /*  {if (thisSection.isSectionItem)  {thisSection.sectionItemCom.map((item)=>
                <SectionItem1
                />)}
                else      sectionItem={thisSection.sectionItem}*/

            
        
        

    
     
  }

  export default Sections;
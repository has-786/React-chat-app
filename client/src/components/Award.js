import React from 'react'
import Navbar from './navbar';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import Header from './header';
import url from './url'
import "../css/New_Department.css"

export default class Award extends React.Component {

    constructor(props){
        super(props);
        this.state={
          data:

          [
          {name:'Anatomy',
            arr:[

           { srno:"1", name:"Dr. B. H. Bahetee",
            desc:"Guest Lecture on “Anatomy of pelvic and acetabular surgery” held in Dept of anatomy, BJGMC, Pune in March 2016"},

{ srno:"2",name:"Dr. N. D.Mandke" , desc:"Guest Lectures: Promotion of Organ Donation at Government Polytechnic College, Pune in the Month of Oct 2016"},

{srno:"3" , name:"Dr. Patil Anjali Dhanraj",desc:"Guest Lectures: Invited as Guest Lecture to deliver the lecture on “Body Donation” at Swarupwardhini, Pune. 2016"},

{srno:"4", name:"Dr. Shrikant A Rokade",desc:["Guest Lectures: lecture on:  “Organ Donation” in Modern College, Pune, October 2016",
"Awards :‘Best Paper Award In Associate Professor And Professor Category’in Annual Research Society ConferenceBJGMC, Pune 2017 for paper on‘Structuring the Unstructured- Redefining Assessment’"]},




{srno:"5", name:"	Dr. Vaishali Mohan Paranjape",desc:["Guest Lectures on “Speech Function of Human Brain” at Sur Sanjivan Music Therapy Trust on April 2017",


"Promotion of Organ Donation at Government Polytechnic College, Pune Oct 2016",

"Awards: Dr Bhadkamkar award for best paper in Anatomy- User friendly and cost effective method for procurement of Bones from formalin fixed specimens. (43rd Research society conference, February  BJGMC 2017)",

"Invited as a Judge at Dr D Y Patil Medical College for Embryology model making competition on 6 February 2018.",

"Invited as Judge for Poster session on 22",
"March at IRCON 2018 Government Medical College , Aurangabad"]},

{srno:"6" , name:"Dr D R Kate", desc:["Lecturon  “Organ Donation” in Modern College, Pune, October 2016",

"Awards:1. Dr.Bhadkamkar Award For Best Research Paper In Anatomy at Annual Research Society Conference BJGMC , Pune 2016for “M-Learning , The Millennium Language “.2. Best Paper Award in Associate Professor and Professor Category atAnnual Research Society Conference BJGMC , Pune 2017 for “Structuring the Unstructured- Redefining Assessment”."]},

{srno:"7", name:"Dr Sonali Bhimrao Kankhare", desc:"Awards: Best Paper In Assistant Professer category at 42ndResearch Society Conference January BJGMC 2016 for “Umbilical cord coiling index with perinatal outcome"},


{srno:"8" , name:"Dr Vanashree Shinde ", desc:"Received Dr Bhadkamkar Award for Best Paper in Anatomy in 44 Research society conference BJGMC Pune"}


]} ,


             {
              name:'Biochemistry',
               arr:[
                    {srno:"1"  ,name:"Dr. Seema Singh"  ,desc:"1st Prize in 43th Research society conference at B. J Govt. Medical College, Pune"}
                 ]
             },

            {
              name:'Pathology',
              arr:[
              {srno:"1",name:"Dr. Pooja and Dr. Sharvari (PG Residents)	" ,desc:"Second Prize at Pathology state level Quiz at Medical College Wardha."},

            {srno:"2",name:"	Dr. Pooja (PG Resident)	Niphadkar "  ,desc:"best paper in pathology at Research Society Conference , feb.2018."},

            {srno:"3",name:"	Dr. Sharvari (PG Residents)",desc:"Second prize at state level Hematology Quiz at IGGMC, Nagpur"},

            {srno:"4",name:"	Dr. Sharda Rane (Asso.Prof.)",desc:"Guest Lecture in Dermatopathology, Surgipath CME 2018 at MGM,Mumbai"},

            {srno:"5",name:"	Dr. Sharvari (PG Resident)",desc:"second prize in Pune pathology meeting for PG Quiz March 2018."},

            {srno:"6",name:" 	. Dr. Vijay Joshi",
             desc:["Guest lecture: Feb 2017 :- Histiocytic Disorders in Children.Mar 2017 :- Placental Path",
                      "Mapcon conference 2017	Second prize in slide seminar. ",
                      "Mapcon conference 2017	Second prize for paper presentation for post graduate student.14/06/2017 to 17/06/2017 NABL Training."]}




            ]},
            {
              name:'Pharmacology',
              arr:[

             {srno:"1",name:"Dr. Bharti Daswani (Associate Professor)",desc:["Selected for and completed the Fogarty HIV-TB Training at Program Graduate Summer Institute of Epidemiology & Biostatistics (GSIEB) at the Johns Hopkins Bloomberg School of Public Health, at the Johns Hopkins Bloomberg School of Public Health, Baltimore, June 2017.",
             "Research Methodology workshop- BJ Gov Med College, Pune- Writing a Research Protocol, March 2016",
"Invited as Quiz master to conduct the State Level Intercollegiate Pharmacology Quiz in at MIMER, Talegaon, April 2016",
"Research Methodology workshop- BJ Gov Med College, Pune- Writing a Research Protocol, July 2016",
"Invited as Quiz master to conduct the Mumbai zonal round of the Intercollegiate Pharmacology Quiz at Seth GS Med College, Mumbai in September 2016",
"Lecture on “Roadmap to Implementation of Antibiotic policy” at a Zonal CME-Workshop organized by Ordinance factory Kirkee and National Academy of Defence on 9th December 2016",
"Research Methodology workshop- Tehmi Grant Institute of Nursing, Pune- Ethics in 15th Clinical Research December 2016",
"Research Methodology workshop- BJ Gov Med College, Pune- Ethics in Clinical Research February 2017",
"Quizmaster for Undergraduate Intercollege Quiz- Pharmacoscopia",
"Guest speaker for CME program on Update on Infectious diseases- Recent Challenges and Control Strategies organized by AKMG Emirates at RAK-UAE. Lecture on Probiotics and their therapeutic potential, on 5th May 2017",
"Guest speaker for CME organized by UAE, Ministry of Health and Prevention at RAK-UAE Hospital.  Lecture on Roadmap to Antibiotic Policy, on 8th May 2017",
"Quizmaster for Intercollege Quiz at the undergraduate academic festival- Respirare",
"Research Methodology workshop- BJ Gov Med College, Pune- Ethics in Clinical Research 10th August 2017",
"Research Methodology workshop- BJ Gov Med College, Pune- Ethics in Clinical Research 23rdAugust 2017",
"Research Methodology workshop- BJ Gov Med College, Pune- Ethics in Clinical Research 14th September 2017"]},

{srno:"2",name:"Mrs. Hasina Sayyad (Assistant Professor)",desc:"Received Best Poster 1st prize in Teacher Category 2017 Research Society conference B J Medical College and Sassoon Journal Hospital Pune."},
{srno:"3",name:"Dr Rupali Bandagi",desc:"Best poster presentation: 2nd prize in the 43rd Annual research society conference 2016 . 21st-23rd Feb 2017.Name of paper- Therapeutic drug monitoring of carbamazepine and phenytoin: monotherapy versus combination therapy"},
{srno:"4",name:"Dr.B.R.Daswani (Associate Professor)",desc:["Guest lecture on Prevention of Antibiotic Abuse and Rational Use of drugs at a CME organized by Ordnance Factories Hospital, Khadki, Pune in association with National Academy of Defence Production (Ministry of Defence, Govt of India), Ambajhari, Nagpur for Medical Officers working in different Ordnance Factories Hospitals in November 2017",
"Judge for the oral research presentations during the 6th Annual Research Society Conference of MIMERMC BSTRH, Talegaon, held on 07 December 2017",
"Guest Lecture on Principles of Pharmacokinetics / Pharmacodynamic Optimization for Antibiotic dosing at the CME on Antibiotic Stewardship organized by Department Of Microbiology & Antibiotic Policy Committee MIMER Medical College Talegaon Dabhade in December 2017."]},
{srno:"5",name:"Mrs.Haseena Sayyad",desc:"Received Best Poster 1st prize in Teacher Category 2017 Research Society conference B J Medical College and Sassoon General Hospital Pune"}

]},

            {
             name:'Microbiology',
              arr:[

             {srno:" 1",name:"",desc:"Microbiology laboratory was awarded NABL accreditation"},

            {srno:"2",name:"",desc:"Tuberculosis laboratory received RNTCP accreditation"},

            {srno:"3",name:" 	Dr.SwatiMudshigkar",desc:"Awarded Young Investigator of India award at International Conference of Infectious diseases.(March 2016)"},
            {srno:"4",name:" 	Dr.SnehalDhaigude	",desc:"Microcon 2016, PGI Chandigarh. Travel grant awarded to present ‘Changing spectrum of Salmonella at tertiary care hospital in Pune’"},

           {srno:"5",name:"	DrVaishaliGokhale",desc:["Awarded 3rd prize in poster presentation at research society conference 2017 at BJGMC,Pune",
           "presented paper in 24th Maharashtra Chapter conference of IAMM 2017 at Aurangabad 14th 15th Oct.2017. Won first  prize for Poster presentation."]},

         {srno:"6",name:"	ShaunakLohite",desc:"Undergraduate student received second prize in oral paper presentation in research Society conf.at BJGMC,2017."},
         {srno:"7",name:"	Dr.Mausami Kadam" ,desc:"Awarded first prize in PG quiz at Mahamicrocon 2016"},

        {srno:"8",name:"	Dr.Sanya",desc:"awarded 1st prize in poster presentation at Solapur,Mahamicrocon 2016"},
        {srno:"9",name:"	Dr.Smita Deshpande", desc:"Fogarty Scholarship awarded by Johns Hopkins University, USA to obtain training in US"},
        {srno:"10",name:"	Dr.SunilBhamare	",desc:"Fogarty Scholarship awarded by Johns Hopkins University, USA to obtain training in US"},
        {srno:"11",name:"	Dr.Suvarna Joshi,Associate Professor",desc:"presented paper in 24th Maharashtra Chapter conference of IAMM 2017 at Aurangabad 14th 15th Oct.2017. Won  third prize for Oral presentation."},
        {srno:"12",name:"	Dr.Saniya Daruwala, Senior Resident,",desc:"presented poster in 24th Maharashtra Chapter conference of IAMM 2017 at Aurangabad 14th 15th Oct.2017. Won third prize for Poster presentation"}





              ]},
          {name:'Forensic_medicine',
          arr:
              [
                {srno:"1"	,name:"Dr. Rahul V. Khade"  ,desc:"First Rank in Summer 2017 MUHS University Examination"  }
              ]


            },
            {name:'medicine',
            arr:[

              {srno:"1",name:"Dr. Saleena Vaidya ",desc:"JR-III	3rd Prize  ISHTM  Haematology Quiz 2018 at Ruby Hall Clinic"},
              {srno:"2",name:"Dr. Neha Suryavanshi",desc:"MAPCON Oct. 2016  1st  in Maharashtra State."},
              {srno:"3",name:"Dr. Bony George",desc:"MAPCON Oct. 2016  2nd  in Maharashtra State."},
              {srno:"4",name:"Dr. VaibhavBhoyar	",desc:"Runner up API  State level Quiz 2016"},
              {srno:"5",name:"Dr. Mitty George",desc:"Runner up API  State level Quiz 2016"},

              {srno:"6",name:"Dr. Mohasin Mevekari	",desc:"Runner up API  State level Quiz 2016"},
              {srno:"7",name:"Dr. AjitAvhad",desc:"3rd Prize Maharashtra Haematology quiz 2016"},

              {srno:"8",name:"Dr. SahilMoriwala	B .",desc:"J .Medical Conference Best case  presentation 1st prize 2017"},

             {srno:"9",name:"Dr. NiraliChandan",desc:"Qualified for final round of S. D. Deodhar Rheumatology quiz  2017 Qualified for national round of Torrent young scholarship award Tysa"},

             {srno:"10",name:"Dr. GajananGawande JR-III",
             desc:"Qualified for final round of S. D. Deodhar Rheumatology quiz 2017.received Second prize in emfest 2018 ,Nagpur."},
             {srno:"11",name:"Dr. Vipul Chakurkar	",desc:["Best poster presentation of Indian Society of Nephrology West zone conference 2017. Indore.",
             "Second position in quiz held at ISN-Wz 2017 Indore."]},

              {srno:"12",name:"Dr.Vishal Kotecha (JR –III),Balaji Salunkhe(JR –III), Kapil Sejapal(JR –III )",desc:"received Second prize in API Quest 2018 ,Pune"}
            ]


            },
            {
              name:'skin',
              arr:[
               {srno:"1",name:"Dr. Chavan RB (Prof. and HOD)",desc:["Jan 2018:1.MCI assessor in three medical colleges",
                                 "2.Appraiser  for NEET PG Exam conducted by National Board of Examination."]},

              {srno:"2",name:"Dr. Belgaumkar VA (Asso. Prof.)" ,desc:["Jan 2018 :1.Nominated as expert on board of studies by Krishna Institute of Medical Sciences, Karad. ",
                           "2. Falicitated by Maharashtra IADVL as best thesis Guide( Dr. Arvind Lonkar Award)Feb 2018",
"Falicitated by GHARPURE AWARD for the  Best Paper Presentation at Research society 44’th Annual conference BJGMC PUNE",
"Nominated Member at Governing council ,Research Society ,BJGMC, Pune.",
"Nominated member at Research cell, BJGMC,Pune",
"Appointed Assessor (MUHS & DMER) for recognition and sanction of increased uptake of seats for M.D. (Skin.)",
"Appointed examiner (MUHS) for MD (Skin examination).",
"Recipient of “Galadari Award“ for oral presentation at Dubai Derma 2017.",
"Participated in paper presentation in WCOCD, Bengaluru, 2017.",
"Invited speaker for regional, state, national conferences",
"Invited speaker for national conference (Mid-dermacon 2017) for talk on Leprosy non responders",
"Judge for poster session at Mid-dermacon 2017",
"Invited faculty and judge for Respirare 2017 (National Under-graduate conference)",
"Presented a talk on “Skin care in neonates & children” in IAP conference, 2017",
"Presented a talk at IMA Pimpri-chinchwad and IADVL Pune branch on “Prescribing inpregnancy”, October and December 2017 respectively",
"Delivered talk on Thesis writing in PG Orientation program 2017",
"Selected as speaker for World Congress of Tuberculosis and Lung disease conference at MEXICO, 2017",
"Felicitation by Maharashtra IADVL at CUTICON 2017, Mumbai for Dr. Arvind Lonkar Award (Best thesis)",
"Invited tomparticipate as expert in Sakhi Sahyadri. Programme on DD Sahyadri channel on 2 occasions. Topic – vitiligo and skin care in women in winter.",
"Mentored Gold meddalist student Dr. Nitika Deshmukh MD (skin and VD) MUHS examination",
"Mentored Dr. Shweta Tharewal for best oral paper in Dermatology (Dr. M.B. Gharpuray Award) at annual conference of Research society 2017.",
"Nominated as expert on board of studies by Krishna Institute of Medical Sciences, Karad. ",
"Felicitated by Maharashtra IADVL as best thesis Guide ( Dr. Arvind Lonkar Award)",
"CME - IADVL clinical meet Pune January 2018 ."]},

{srno:"3",name:"Dr. R.B.Chavan- (Professor & Head)" ,desc:["Chairperson at various state level and national conferences.",
"Participated in e poster in cuticon Goa 2017.",
"Participated in e poster in WCOCD , BENGLURU 2017.",
"Participated in e poster in MID-DERMACON Mumbai 2017.",
"Participated in e poster in Pigmentarycon 2017.",
"Participated in e poster in Aesthetica International Conference 2017.",
"Participated in quiz in DERMACON Kolkata 2017.",
"Faculty in PGCON, Ahmedabad  2017.",
"Chairperson at Research Society conference, BJMC, Pune 2017",
"Chairperson at international Aesthetica conference port blair 2017.",
"Chairperson at Lasercon Pune 2017."  ,
"Appointed as MCI assesor at various colleges.",
"Appointed as convenor  for M.D. and D.D.V.L. exam by MUHS.",
"Appointed as paper setter and evaluator for M.D. And D.D.V.L. exam by MUHS.",
"Appointed as external examiner at Sumandeep University , Baroda.",
"MCI assessor in three medical colleges",
"Appraiser  for NEET PG Exam conducted by National Board of Examination."]},
{srno:"4",name:"	Dr. S.N. Tolat- (Unit Incharge and Hon. Associate Professor)",
desc:["Presented a talk on “ Management of Infantile Hemangiomas” in IAP conference, 2017",
"Presented a talk on vascular tumours at IMA Pimpri-Chinchwad, December 2017"]},

{srno:"5",name:"Dr.A.P. Gosavi(Associate professor)",
desc:["Appointed as Panelist at Aesthetica international conference portblair .",
"1st author in paper named “Nevus of Ota treated with 1064 nm Q-Switch Nd- YAG”, published in “Aesthetician journal’E poster – at Pigmentarycon Indore, November 2017",
"Paper evaluator for M.D. And D.D.V.L. Exam 2017."]},
{srno:"6",name:"Dr.A.S.Salunke (Assistant professor)",desc:["Selected as Speaker at National DERMACON, Kolkata, 2017",

"Awarded IADVL Dermacon ( National Conference)  scholarship in January 2017 held in Kolkatta",
"IADVL observership in dermatopathology 2017 at KEM Mumbai."]}

      ]



            },

            {
              name:'Radiology',
               arr:[
              {srno:"1",name:"Dr.Monica Patil ",desc:["received Best Oral Paper by Lecturer at 44th Annual Conf. of Research Society of  B.J.G.Medical College, Pune.",

              " received Roentgen trophy for Best Paper inRadiology titled “CT Coronary angiography findings  at 44th Annual Conf. of Research Society of   B.J.G.Medical College, Pune."]},
               {srno:"2",name:"Dr.Anand Hatgaonkar" , desc:["Associate Professor	invited as a guest faculty for State Conference of Indian Radiology & Imaging Association at Latur 2016. Topics are 1. Chest X-Ray : Seen & Unseen 2. Bone Tumors made easy.",

              "invited as a guest faculty for State Conference of Indian Radiology & Imaging Association at Solapur 2017."]},

              {
              srno:"3",name:"Dr.Anand Hatgaonkar and Dr.Rajendra  Chavhan ",desc:"Assistant Professor guest faculty for State Conference of Indian Radiography Association Pune on 4/06/2017."}


               ]



            },

                        {
                          name:'Psychiatry',
                          arr:[
                           {srno:"1",name:"	PG Team",desc:"won intercollege PG Quiz 2016 and was runner up for zonal round."},

                           {srno:"2",name:"	PG Team	",desc:"won intercollege PG Quiz 2017 and selected for zonal round."}

                          ]
                        },
            {
              name:'Pediatrics',
              arr:[
                {srno:"1",name:"Dr.Rahul ",desc:"Won third prize in best Interesting cases Annual Research Society held in February 2017 at BJGMC, Pune."},
                {srno:"2",name:"Dr.Sandhya S. Khadse",desc:["has been selected as a Dean, In Rajiv  Gandhi   Medical College, Thane.",
                 "	On 16 Inaugural Function of 59 bedded state of art NICU at Sassoon General Hospital, Pune."]},
               {srno:"3",name:"Dr.Aarti Kinika",desc:"British Medical Journal Awards South Asia-2017 in Maternal & Child Health Team of the Year category."},
                {srno:"4",name:"Dr Rajesh Kulkarni",desc:"selected as Fogarty scholar."},

              {srno:"5",name:"Dr. A. A. Kinikar (Prof. & Head) ",desc:"Won British Medical Journal Awards South Asia-2017 in Maternal &   Child Health Team of the Year categDr. A. A. Kinikar (Prof. & Head) Won British Medical Journal Awards South Asia-2017 in Maternal & Child Health Team of the Year category."},
              {srno:"6",name:"Dr Chhaya Valv",desc:"Certificate of appreciation for NICU awarded  by The Honarable Health Minister OF Maharashtra."}
             ]

            },




            { name:'ENT',
              arr:[
             {srno:"1",name:"",desc:"Second position in AOI Vidarbha UG ENT Quiz by students in 2008."},

             {srno:"2",name:"",desc:"First position DrPrashobh Stalin in PG Oncology Test conducted at 5th Oncology Conference at Ruby Hall Cancer Hospital Pune."},

             {srno:"3",name:"",desc:"Dr.Sandra Nisha Desa award- 2nd prize to Dr. PournimaWagh for paper on Pituitary macroadenoma: endoscopic four hand technique.s"},
             {srno:"4",name:"",desc:"First prize to Dr. PournimaWagh for post graduate paper presentation at the AOI, Pune Annual CME. Topic: Hyperbilirubinemia- is it the culprit for hearing loss among neonates"},
             {srno:"5",name:"",desc:"Second Prize in paper presentation at Annual CME of Pune AOI 2016 by Dr. SarangaBurgute JR II in my department (Under Dr Rahul Telang Associate Professor)."},
             {srno:"6",name:"",desc:"Fellowship in Airway surgery, LASERs and Head and Neck Surgery, CHU Mont Goodine, Yvoir Belgium 2012 Dr. Samir Joshi."},
             {srno:"7",name:"",desc:"Fellowship in Head and Neck Cancer Memorial Sloan Kettering Cancer Center New York 2014. Dr. Samir Joshi."},
             {srno:"8",name:"",desc:"Fogarty Fellowship for Epidemiology and Research JHU Baltimore 2017. Dr. Samir Joshi."},

             {srno:"9",name:"",desc:"Four visits to JHU Baltimore since 2013 for Head and Neck cancer and Facial Plastic departments for academic and surgical purpose. Dr. Samir Joshi."}


            ]
          },
          {name:'Gynecology',
            arr:[
{srno:"1",name:"Dr. Ramesh A Bhosale",desc:["Invited for ACTG (AIDS Clinical Trial Group) Meeting 2015 at Washington DC USA. Attended from 13/06/2016 to 18/06/2016.",
"Invited Expert for Diagnostic and Surgical Mega-Health Camp organized by Hon. Chief Minister, Maharashtra State for drought affected farmers at Jalgaon 9-12 January 2016.",
"Felicitation at the hands of Hon. Chief Minister, Maharashtra State on 7th March 2016 in Mumbai, for giving expert services at Diagnostic and Surgical Mega-Health Camp for drought affected farmers at Jalgaon 9-12 January 2016.",
"Expert Member on National Core Group on Elimination of Mother to Child transmission of HIV & Syphilis,  Ministry of Health & Family Welfare, Govt. of India  from Nov 2016",
"Presentation of College & Hospital Report in College Council chaired by Hon. Minister of Medical Education, Govt. of Maharashtra 30th Nov 2016.",
"Member, Budget Committee of Maharashtra University of Health Sciences, Nashik 2017",
"Health Camps: Mega Camp (Diagnostic & Operative) Jalgaon 09-12/01/2016, Police Training Centre, Khandala 20-03-2016, SillodDist- Aurangabad on 27-03-2016, ChalisgaonDist-Jalgaon 03-04-2016, Nagpur (Diagnostic & Operative) 27-05-2016, Yavatmal 05-06-2016, Solapur  12-06-2016, Islampur 28-12-2016, Mega Camp Nashik 01-01-2017, Fattepur (Jamner) 17-05-2017, Fulambri Dist. Aurangabad 17-08-2017"]},

{srno:"2",name:"Dr. Shilpa Naik",desc:["Felicitation at the hands of Hon. Chief Minister",
"Fogarty Fellowship for Epidemiology and Research JHU Baltimore USA 2016.",
"Felicitation by SP Khandala Police Prashikshan Kendra Khandala for Female police health camp"]},

{srno:"3",name:"Dr. Mariyam Ahmed",desc:["1st prize in “Oncology Quiz” State level1st prize paper presentation at Annual Research Society Conference BJGMC , Pune 2017",
"1st prize paper presentation (Lecturer ) at Annual Research Society Conference BJGMC , Pune 2017"]},

{srno:"4",name:"Dr Mansi Verma, Dr. A N Bhalerao",desc:"1st prize poster presentation at Annual Research Society Conference BJGMC, Pune 2017"},
{srno:"5",name:"Dr.Akanksha Verma, Dr. Shilpa Naik",desc:"Best case presentation at Annual Research Society Conference BJGMC , Pune 2017"},
{srno:"6",name:"Dr. Nilesh Bhalerao Dr. Uma Wankhede",desc:"FOGSI SSS conference, Pune paper presentation"},
{srno:"7",name:"Dr. Vishalkarale, Dr Uma Wankhede",desc:"First prize in poster Annual Research Society Conference BJGMC, Pune 2016"},
{srno:"8",name:"Dr Ketki Parasnis, Dr. Uma Wankhede",desc:"Second prize in undergraduate paper Annual Research Society Conference BJGMC, Pune 2016"},
{srno:"9",name:"Dr. Pranav Satav Dr. Uma Wankhede",desc:"Second prize in postgraduate paper Annual Research Society Conference BJGMC , Pune 2017"},
{srno:"10",name:"Dr. P. W. Sambrey",desc:["1.	Faculty in Pre-Congress Program of Mock Viva & Quiz at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 08-02-2018",
"2.	Judge of Free Paper Session at at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 10-02-2018",
"3.	Chairperson of Intresting Cases Session at 44th RESEARCH SOCIETY CONFERENCE AT B.J.M.C , PUNE in FEB 2018"]},

{srno:"11",name:"Dr.R A Bhosale",desc:["1. Lectures on 1) Writing Research Protocol 2) Literature Review at Research Methodology Workshop at Dr. D. Y. Patil College of Ayurved, Pimpri, Pune. 7th February 2018.",
"2 Faculty in Pre-Congress Program of Mock Viva & Quiz at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 08-02-2018",
"3 . Lecture on “Management of Traumatic PPH” in Workshop on PPH at at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 09-02-2018",
"4 . Judge of Free Paper Session at at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 10-02-2018",
"5 Chairperson of Scientific Session at at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 10-02-2018",
"6 Invited Guest of Honot for launching of Doctor-Patient Communication Programme “Rugna Darbar” at Shree Multispeciality Hospital, Kharadi, Pune 20th February 2018.","7Lecture on ‘Visual Inspection with Acetic Acid (VIA)’ in CME on Cervical Cancer Prevention organized by Indian Medical Association, Pune under the aegis of Kamalnayan Bajaj Academic Center, 4th March 2018.",
"8  Expert Panelist for Panel discussion on ‘Management of CIN’ in CME on Cervical Cancer Prevention organized by Indian Medical Association, Pune under the aegis of Kamalnayan Bajaj Academic Center, 4th March 2018.",
"9 Invitee by ‘Prayas’ to the dissemination meeting of the work being done by Prayas in the field of cervical cancer prevention and the round table discussion on the scope of its expansion, 4th March, 2018 at IMA House, Pune."]},
{srno:"12",name:"Dr. Sanjaykumar Tambme",desc:"1.Faculty in Pre-Congress Program of Mock Viva & Quiz at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 08-02-2018 Nominated board of studies MUHS Surgery and allied branches."},
{srno:"13",name:"Dr. Shilpa Naik",desc:"1.AMOGS Mock Viva for Post Graduates Feb 2018 as faculty."},
{srno:"14",name:"DR Uma Wankhede",desc:["1.Faculty in Pre-Congress Program of Mock Viva & Quiz at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 08-02-2018",
"2.	Convenor of PPH workshop at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 09-02-2018",
"3.	Lecture on “Management of atonic PPH” in Workshop on PPH at at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 09-02-2018",
"4.	 Judge of Free Paper Session at at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 10-02-2018",
"5.	 Chairperson of Scientific Session at at 32nd Annual Conference of Association of Maharashtra Obstetrics & Gynaecological Societies, Pune 10-02-2018",
"6.	Chairperson at free paper session of 44th research society BJGMC PUNE",
"7.Chairperson at fetal therapy workshop at bharati vidyapeeth",
"8.Acquired post graduate diploma in geriatric medicine conducted by IGNOU ,NEW DELHI IN FEB 2018",
"9.	Faculty at workshop on Gender Violence conducted by DMER and CEHAT on 27 and 28 February,Mumbai"]},

{srno:"15",name:"Dr  Ruchi N. Thakur",desc:["1.Faculty In AMOGS 2018 : Delivered lecture on Overview of PPH on 9.2.2018",
"2.Panelist in Panel discussion on fetal medicine on 22/2/2018 at 44th research society conference of BJGMC",
"3.Lecture on Preventive oncology for women officers of MSEB, pune on 8.3.2018",
"4.Lecture on Managing Menopause positively at Ladies Club , Pune on 8.3.2018"]},

{srno:"16",name:"Dr. Urvashi and Dr. Amisha",desc:"won 1st prize for AMOGS PG Quiz."}

]

},
{ name:'Surgery',
  arr:[
    {srno:"1",name:"Dr. S. S. Thakur",desc:"Video presentation on troubleshooting in Laparoscopic hiatus hernia repair- –Workshop on Hernia update."}
   ]
}



          ]
        }


    }




componentDidMount(){
  var tabs=document.getElementsByClassName('tab-pane');
  if(tabs.length)tabs[0].className+=" show active";
  var list=document.getElementsByClassName('list-group-item');
  if(list.length)list[0].className+=" active";


  fetch(url+'/api/awards',{ method:'GET'})
         .then(response=>{ return response.json()})
         .then((body)=>{
           //alert(JSON.stringify(body.awards))
                this.setState({data:body.awards});

          })
         .catch(err=>{});
}

    render(){

      window.scrollTo(0,0);

        return (<div id='mainBody'>

        <Header />
          <Navbar/>

        <section class="New_Department row">
        <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>

            <nav class="side_navigation col-lg-3 mysidenavbar">
                <ul class="list-group sidenav_list">
                {
                  this.state.data.map((award,ind)=>{
                    return <li><a class="list-group-item list-group-item-action" data-toggle="list" href={"#Info"+(ind+1)}  onClick={sidenavbar}><i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;{award.name}</a></li>

                  })
                }
                </ul>
            </nav>
            <article class="col-lg-9">
            <header id="article_heading"> Awards </header>
            <br></br>
            <div class="tab-content">
            {
              this.state.data.map((award,ind)=>{
                return   <div  class="tab-pane fade" id={"Info"+(ind+1)} >
                  <div class="table-responsive">
                        <table class="table table-bordered table-hover table-striped">
                        <thead>
                         <tr>
                          <th>Sr.No</th>
                          <th>Name of Professor</th>
                          <th>Awards</th>

                         </tr>
                       </thead>
                       <tbody>
                          {
                              award.arr.map(r=>{
                              return <tr>
                                 <td>{r.srno}</td>
                              <td>{r.name}</td>
                              <td>{r.desc}</td>


                              </tr>})
                          }
                        </tbody>
                     </table>
                   </div>


              </div>


              })

            }

     </div>
    </article>
</section>
</div>);
    }
}

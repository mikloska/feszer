import React, {useState} from 'react'
import {Typography, Card, Grid, Paper, Box, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactCardFlip from 'react-card-flip';

const useStyles = makeStyles((theme) => ({
  Box: {
    width:350,
    height:360
  },
  Media:{
    maxWidth:'100%'
  },
  Heading:{
    padding:5
  },
  More:{
    float:'right',
    cursor:'pointer',
    color: theme.palette.primary.main,
    fontSize:30
  }

}));


const AboutScreen = () =>{
  const [HunorFlipped, setHunorFlipped] = useState(false)
  const [BenceFlipped, setBenceFlipped] = useState(false)
  const [IzaFlipped, setIzaFlipped] = useState(false)
  const [GyuriFlipped, setGyuriFlipped] = useState(false)
  const [BranoFlipped, setBranoFlipped] = useState(false)
  const [GeorgeFlipped, setGeorgeFlipped] = useState(false)
  const [LackoFlipped, setLackoFlipped] = useState(false)
  const [MiklosFlipped, setMiklosFlipped] = useState(false)
  
  const handleHunor = (e) => {
    e.preventDefault();
    (HunorFlipped===false)?setHunorFlipped(true):setHunorFlipped(false)
  }
  const handleBence = (e) => {
    e.preventDefault();
    (BenceFlipped===false)?setBenceFlipped(true):setBenceFlipped(false)
  }
  const handleIza = (e) => {
    e.preventDefault();
    (IzaFlipped===false)?setIzaFlipped(true):setIzaFlipped(false)
  }
  const handleGyuri = (e) => {
    e.preventDefault();
    (GyuriFlipped===false)?setGyuriFlipped(true):setGyuriFlipped(false)
  }
  const handleBrano = (e) => {
    e.preventDefault();
    (BranoFlipped===false)?setBranoFlipped(true):setBranoFlipped(false)
  }
  const handleLacko = (e) => {
    e.preventDefault();
    (LackoFlipped===false)?setLackoFlipped(true):setLackoFlipped(false)
  }
  const handleMiklos = (e) => {
    e.preventDefault();
    (MiklosFlipped===false)?setMiklosFlipped(true):setMiklosFlipped(false)
  }
  const handleGeorge = (e) => {
    e.preventDefault();
    (GeorgeFlipped===false)?setGeorgeFlipped(true):setGeorgeFlipped(false)
  }


  const language = useSelector((state) => state.language)
  const classes = useStyles();
  return (
    <div>
      <Typography variant ='h3'>{language === 'MAGYAR' ? 'About Us' : 'Rólunk'}</Typography>
      <Grid container style={{marginTop:0}} spacing={6} justifyContent='center' alignItems='center'>

    {/* Hunor */}
        <Grid item s={12} m={3}>
        <ReactCardFlip isFlipped={HunorFlipped} flipDirection="horizontal">
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'https://feszer-band.s3.amazonaws.com/Hunor.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Hunor Kiss - violin, viola' : 'Kiss Hunor - hegedű, brácsa'}
              <ExpandMoreIcon id='hunor' className={classes.More} value='hunor' onClick={handleHunor}/>
            </Typography>
          </Paper>

          <Paper elevation={3}>
            <Box className={classes.Box}>
              <Typography style={{padding:5}}>{language === 'MAGYAR' ?
                `Hunor looks like an opossum. The opossum (/əˈpɒsəm/) is a marsupial of the order Didelphimorphia (/daɪˌdɛlfɪˈmɔːrfiə/) 
                endemic to the Americas. The largest order of marsupials in the Western Hemisphere, it comprises 110+ species in 19 genera.
                 Opossums originated in South America and entered North America in the Great American Interchange following the connection 
                 of the two continents. Their unspecialized biology, flexible diet, and reproductive habits make them successful colonizers
                  and survivors in diverse locations and conditions.`: `Hunor hasonlít a oposszumra. Az oposszumok (Didelphimorphia), más néven 
                erszényespatkányok az emlősök (Mammalia) osztályának, azon belül az elevenszülő emlősök (Theria) 
                alosztályának és az erszényesek (Marsupialia) alosztályágának oposszumalakúak rendjét, és az egyetlen 
                abba tartozó családot, az oposszumfélék családját jelenti.`
                }
              </Typography>
            {/* <img src={'./src/img/Hunor.jpg'} className={classes.Media}/>  */}
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Hunor Kiss - violin, viola' : 'Kiss Hunor - hegedű, brácsa'}
              <ExpandMoreIcon id='hunor' className={classes.More} onClick={handleHunor}/>
            </Typography>
          </Paper>
          </ReactCardFlip>
        </Grid>
      
      {/* Bence */}
        <Grid item s={12} m={3}>
        <ReactCardFlip isFlipped={BenceFlipped} flipDirection="horizontal">
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'https://feszer-band.s3.amazonaws.com/Bence.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Bence Kalán - violin, viola' : 'Kalán Bence - hegedű, brácsa'}
              <ExpandMoreIcon className={classes.More} onClick={handleBence} />
            </Typography>
          </Paper>
   

          <Paper elevation={3}>
            <Box className={classes.Box}>
              <Typography style={{padding:5}}>{language === 'MAGYAR' ?
                `Bence looks like a beaver. Beavers are large, semiaquatic rodents in the genus Castor native 
                to the temperate Northern Hemisphere. There are two extant species: the North American beaver 
                (Castor canadensis) and the Eurasian beaver (C. fiber). Beavers are the second-largest living 
                rodents after the capybaras. They have stout bodies with large heads, long chisel-like incisors, 
                brown or gray fur, hand-like front feet, webbed back feet and flat, scaly tails. `: `Bence hasonlít a hódfélékre. A hódfélék (Castoridae) az emlősök (Mammalia) osztályába és a rágcsálók 
                (Rodentia) rendjébe tartozó család. A családnak csak 1 élő neme létezik, amelybe 2 ma is élő faj tartozik: az eurázsiai
                 hód és a kanadai hód. Ezeken kívül számos fosszilis faj is tartozik a családba..`
                }
              </Typography>
            {/* <img src={'./src/img/Hunor.jpg'} className={classes.Media}/>  */}
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Bence Kalán - violin, viola' : 'Kalán Bence - hegedű, brácsa'}
              <ExpandMoreIcon className={classes.More} onClick={handleBence}/>
            </Typography>
          </Paper>
          </ReactCardFlip>

        </Grid>

        {/* Iza */}
        <Grid item s={12} m={3}>
        <ReactCardFlip isFlipped={IzaFlipped} flipDirection="horizontal">
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'https://feszer-band.s3.amazonaws.com/Iza.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Izabella Valcuha - violin' : 'Izabella Valcuha - hegedű'}
              <ExpandMoreIcon className={classes.More} onClick={handleIza} />
            </Typography>
          </Paper>
   

          <Paper elevation={3}>
            <Box className={classes.Box}>
              <Typography style={{padding:5}}>{language === 'MAGYAR' ?
                `Iza looks like a zebra. Zebras (UK: /ˈzɛbrə/, US: /ziː-/) (subgenus Hippotigris) are African equines with distinctive
                 black-and-white striped coats. There are three extant species: the Grévy's zebra (Equus grevyi), plains zebra (E. quagga),
                  and the mountain zebra (E. zebra). Zebras share the genus Equus with horses and asses, the three groups being the only 
                  living members of the family Equidae. Zebra stripes come in different patterns, unique to each individual. Several theories
                   have been proposed for the function of these stripes, with most evidence supporting them as a form of protection from biting
                    flies.`: `Iza hasonlít a zebrára. 
                A zebra fekete alapon fehér csíkos. Ezt onnan lehet tudni, hogy az állat bokájánál, orrán, sörényén és farkán 
                fekete az alapszín.[1] Ezek a fejen, a nyakon és a törzsön függőlegesek, míg az állat farán és lábain vízszintesek.
                 A kijelölt gyalogos-átkelőhelyeket a fekete-fehér csíkozás miatt nevezik zebrának.`
                }
              </Typography>
            {/* <img src={'./src/img/Hunor.jpg'} className={classes.Media}/>  */}
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Izabella Valcuha - violin, viola' : 'Izabella Valcuha - hegedű, brácsa'}
              <ExpandMoreIcon className={classes.More} onClick={handleIza}/>
            </Typography>
          </Paper>
          </ReactCardFlip>

        </Grid>
        
        {/* Gyuri */}
        <Grid item s={12} m={3}>
        <ReactCardFlip isFlipped={GyuriFlipped} flipDirection="horizontal">
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'https://feszer-band.s3.amazonaws.com/Gyuri.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'George Kalán - viola' : 'Kalán György - brácsa'}
              <ExpandMoreIcon className={classes.More} onClick={handleGyuri} />
            </Typography>
          </Paper>

          <Paper elevation={3}>
            <Box className={classes.Box}>
              <Typography style={{padding:5}}>{language === 'MAGYAR' ?
                `George looks like an aardvark. The aardvark (/ˈɑːrdvɑːrk/ ARD-vark; Orycteropus afer) is a medium-sized,
                 burrowing, nocturnal mammal native to Africa.[2][3] It is the only living species of the order Tubulidentata,
                 [4][5] although other prehistoric species and genera of Tubulidentata are known. Unlike most other insectivores,
                  it has a long pig-like snout, which is used to sniff out food. It roams over most of the southern two-thirds of 
                  the African continent, avoiding areas that are mainly rocky. A nocturnal feeder, it subsists on ants and termites, 
                  which it will dig out of their hills using its sharp claws and powerful legs.`: `Gyuri hasonlít a földimalacra. A földimalac (Orycteropus afer) az emlősök (Mammalia) osztályába a csövesfogúak
                   (Tubulidentata) rendjébe és a földimalacfélék (Orycteropodidae) családjába tartozó Orycteropus nem egyetlen faja.
                   A hosszú pofája végén levő túróorr hasonlít a disznóéra. Fülei azonban a szamáréhoz hasonlítanak, a farka meg olyan, 
                   mint a kengurué. Majdnem kizárólag hangyát és termeszeket eszik. Afrika egyik legfontosabb állata. Olyan mennyiségű
                    termeszt fal fel, hogy sakkban tartja a mérhetetlen károkat okozó termeszeket.`
                }
              </Typography>
            {/* <img src={'./src/img/Hunor.jpg'} className={classes.Media}/>  */}
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'George Kalán - viola' : 'Kalán György - brácsa'}
              <ExpandMoreIcon className={classes.More} onClick={handleGyuri}/>
            </Typography>
          </Paper>

          </ReactCardFlip>
        </Grid>

        {/* Brano */}
        <Grid item s={12} m={3}>
        <ReactCardFlip isFlipped={BranoFlipped} flipDirection="horizontal">
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'https://feszer-band.s3.amazonaws.com/Brano.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              Brano Brinarsky{language === 'MAGYAR' ? ' - double bass' : ' - nagybőgő'}
              <ExpandMoreIcon className={classes.More} onClick={handleBrano} />
            </Typography>
          </Paper>

          <Paper elevation={3}>
            <Box className={classes.Box}>
              <Typography style={{padding:5}}>{language === 'MAGYAR' ?
                `Brano looks like a hedgehog. A hedgehog is a spiny mammal of the subfamily Erinaceinae, 
                in the eulipotyphlan family Erinaceidae. There are seventeen species of hedgehog in five 
                genera found throughout parts of Europe, Asia, and Africa, and in New Zealand by introduction. 
                There are no hedgehogs native to Australia and no living species native to the Americas (the extinct 
                  genus Amphechinus was once present in North America).`: `Brano hasonlít a sündisznóra. A sünfélék 
                  (Erinaceidae) az emlősök (Mammalia) osztályának és az Eulipotyphla rendjének egyik családja.
                A régebbi rendszertani besorolások szerint a rovarevők (Insectivora) rendjébe, aztán pedig rövid ideig 
                a saját sünalakúak (Erinaceomorpha) rendjébe tartozott.[1][2]
                
                10 élő nem és 24 ma élő faj tartozik a családba.`
                }
              </Typography>
            {/* <img src={'./src/img/Hunor.jpg'} className={classes.Media}/>  */}
            </Box>
            <Typography className={classes.Heading}>
              Brano Brinarsky{language === 'MAGYAR' ? ' - double bass' : ' - nagybőgő'}
            <ExpandMoreIcon className={classes.More} onClick={handleBrano}/>
            </Typography>
          </Paper>

          </ReactCardFlip>
         
        </Grid>

        {/* Lacko */}

        <Grid item s={12} m={3}>
        <ReactCardFlip isFlipped={LackoFlipped} flipDirection="horizontal">
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'https://feszer-band.s3.amazonaws.com/Lacko.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'László Gáspár - double bass' : 'Gáspár László - nagybőgő'}
              <ExpandMoreIcon className={classes.More} onClick={handleLacko} />              
            </Typography>
          </Paper>

          <Paper elevation={3}>
            <Box className={classes.Box}>
              <Typography style={{padding:5}}>{language === 'MAGYAR' ?
                `László looks like a koala. The koala or, inaccurately, koala bear[a] (Phascolarctos cinereus), 
                is an arboreal herbivorous marsupial native to Australia. It is the only extant representative 
                of the family Phascolarctidae and its closest living relatives are the wombats, which are members 
                of the family Vombatidae. The koala is found in coastal areas of the mainland's eastern and southern
                 regions, inhabiting Queensland, New South Wales, Victoria, and South Australia.`: `László hasonlít a koalára.
                  A koala (Phascolarctos cinereus) Ausztráliában őshonos erszényes, növényevő állat, a koalafélék (Phascolarctidae)
                   családjának egyedüli élő képviselője. A koala szó a katang bennszülött nép nyelvéből származik, jelentése „nem ivó”.
                    A név nem teljesen találó, bár tényleg keveset isznak. A „koalamedve” megnevezés helytelen, mivel a koalák nem 
                    tagjai a medvék családjának.`
                }
              </Typography>
            {/* <img src={'./src/img/Hunor.jpg'} className={classes.Media}/>  */}
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'László Gáspár - double bass' : 'Gáspár László - nagybőgő'}
            <ExpandMoreIcon className={classes.More} onClick={handleLacko}/>
            </Typography>
          </Paper>

          </ReactCardFlip>
        </Grid>

        {/* George */}

        <Grid item s={12} m={3}>
        <ReactCardFlip isFlipped={GeorgeFlipped} flipDirection="horizontal">
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'https://feszer-band.s3.amazonaws.com/George.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              George Petran{language === 'MAGYAR' ? ' - viola, cimbalom, tárogató' : ' - brácsa, cimbalom, tárogató'}
              <ExpandMoreIcon className={classes.More} onClick={handleGeorge} />
            </Typography>
          </Paper>

          <Paper elevation={3}>
            <Box className={classes.Box}>
              <Typography style={{padding:5}}>{language === 'MAGYAR' ?
                `George looks like a gorilla. Gorillas are ground-dwelling, predominantly herbivorous great apes that inhabit the tropical
                 forests of central Sub-Saharan Africa. The genus Gorilla is divided into two species: the eastern gorillas and the western 
                 llas, and either four or five subspecies. They are the largest living primates. The DNA of gorillas is highly similar to that
                  of humans, from 95 to 99% depending on what is included, and they are the next closest living relatives to humans after 
                  chimpanzees and bonobos.`: `George hasonlít a gorillára. A gorilla nem fejlődési vonala mintegy 7 millió éve vált külön az 
                  emberekétől (és a csimpánzokétól). Két faja a nyugati gorilla (Gorilla gorilla) és a keleti gorilla (Gorilla beringei). A 
                  nyugati gorillák Nyugat- és Közép-Afrika trópusi esőerdőiben élnek Nigériától Kongóig, míg a keletiek Közép- és Kelet-Afrika
                   egyes területei (Kelet-Kongó, Ruanda, Uganda) esőerdeiben. `
                }
              </Typography>
 
            </Box>
            <Typography className={classes.Heading}>
              George Petran{language === 'MAGYAR' ? ' - viola, cimbalom, tárogató' : ' - brácsa, cimbalom, tárogató'}
            <ExpandMoreIcon className={classes.More} onClick={handleGeorge}/>
            </Typography>
          </Paper>

          </ReactCardFlip>
        </Grid>

        {/* Miklos */}
        <Grid item s={12} m={3}>
        <ReactCardFlip isFlipped={MiklosFlipped} flipDirection="horizontal">
          <Paper elevation={3}>
            <Box className={classes.Box}>
            <img src={'https://feszer-band.s3.amazonaws.com/Miklos.jpg'} className={classes.Media}/> 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Miklós Kertész - accordion, viola' : 'Kertész Miklós - harmonika, brácsa'} 
              <ExpandMoreIcon className={classes.More} onClick={handleMiklos} />
            </Typography>
          </Paper>

          <Paper elevation={3}>
            <Box className={classes.Box}>
              <Typography style={{padding:5}}>{language === 'MAGYAR' ?
                `Miklós looks lie a rat. Rats are various medium-sized, long-tailed rodents. Species of rats are found throughout the order 
                Rodentia, but stereotypical rats are found in the genus Rattus. Other rat genera include Neotoma (pack rats), Bandicota (bandicoot
               rats) and Dipodomys (kangaroo rats). Rats are typically distinguished from mice by their size. Usually the common name of a large muroid
                rodent will include the word "rat", while a smaller muroid's name will include "mouse".`: `Miklós hasonlít a vándorpatkányra. Eredetileg a 
                vándorpatkány nem volt honos Európában. Miképp jutott ide, az nem tisztázott. Mindenesetre Kelet-Ázsiában (például Kínában) és Szibéria
                 mérsékelt éghajlatú részein a szabad természetben, az embertől távol is előfordul. A lengyel városokban már a 11–13. században megjelenhetett,
                  de inváziószerű bevándorlása és elterjedése Európa egész területén csak a 18. században következett be, azaz jóval később, mint a házi patkánynál.
                   Ettől fogva a vándorpatkány a hajózási útvonalak kiszélesedésével a világ szinte összes kikötővárosába eljutott, és ott megvetette lábát.`
                }
              </Typography>
 
            </Box>
            <Typography className={classes.Heading}>
              {language === 'MAGYAR' ? 'Miklós Kertész - accordion, viola' : 'Kertész Miklós - harmonika, brácsa'} 
            <ExpandMoreIcon className={classes.More} onClick={handleMiklos}/>
            </Typography>
          </Paper>

          </ReactCardFlip>
        </Grid>
        
      </Grid>
      
    </div>
  )
}

export default AboutScreen

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AluraCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';



function ProfileSidebar(props) {
  return (
    <Box>
    <img src={`https://github.com/${props.user}.png`} style={{ borderRadius: '8px' }} />
  </Box>
  )
}

export default function Home() {

  const gitHubUser = 'abraaobrazoliveira';
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho']

  return (
   <> 
    <AlurakutMenu />
    <MainGrid>
     <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar user={gitHubUser} />
     </div> 

     <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
      <Box>
        <h1 className="title">
          Bem vindo(a)
        </h1>

        <OrkutNostalgicIconSet />

      </Box>
     </div> 

     <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
       <ProfileRelationsBoxWrapper>
        
        <h2 className="smallTitle">
          Pessoas da comunidade ({pessoasFavoritas.length})
        </h2>


       <ul>
          { pessoasFavoritas.map(pessoa => 
            <li>
              <a href={`/users/${pessoa}`} key={pessoa}>
                <img src={`https://github.com/${pessoa}.png`} alt="" />
                <span>{pessoa}</span>
              </a>
             </li> 
            ) } 
         </ul>
        
       </ProfileRelationsBoxWrapper>

     </div>
    </MainGrid>
    </>  
  )
}

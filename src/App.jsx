
import './App.css';
import BackgroundImg from './assets/components/BackgroundImg';
import DiscordLogo from './assets/components/DiscordLogo';
import MenuBar from './assets/components/MenuBar';
import TitleContent from './assets/components/TitleContent';
import Text from './assets/components/Text';
import Button from './assets/components/Button' 


function App() {

  return (
    <>
      <BackgroundImg />

      <div className='icons'>
            <DiscordLogo />
            <MenuBar />
      
      </div>

      <div className='container'> 
            <TitleContent />
            <Text />
      
          <div className='buttonContainer' >
              <Button type="download"
              text="Downlod for Mac" />
      
              <Button type="open"
              text="Open Discord in your browser" />
      
          </div> 
      </div>


    </>
    
  )
}

export default App

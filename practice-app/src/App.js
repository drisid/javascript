import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import WelcomeClock from './WelcomeClock';
import Parent from './Parent'
import Clock from './Clock';
import userDetails from './jsxpractice'
import Demo from './Childfunction';
import Counter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HCounter from './components/HookCounterTwo';
import HCounter1 from './components/HookCounterThree';
import HCounter2 from './components/HookCounterFour';
import FormCounter from './components/HookCounterFive';
import CounterOne from './components/ClassCounterOne';
import HookCounterUseEffect from './components/HookCounterUseEffect';

function App() {
  const students = ['abc', '  efg', '  hij']
  let a = 10, b = 20;

  Demo.defaultProps = {
    students: ['abc', 'def', 'ghi']
  }

  return (
    /*  <WelcomeClock>
          <Welcome studentsArray = { students } />
          <Clock  color = "red"  result = {a + b} />
        </WelcomeClock> 

         <Parent />
 
         userDetails
    
        Use of functional components as props
  
         <Demo /> 

         <Counter />
        
        <HookCounter /> 

        <HCounter /> 

        <HCounter1 />

        <HCounter2/> 

        <FormCounter /> 

        <CounterOne/> */
        
        <HookCounterUseEffect />
      
  )

}

export default App;

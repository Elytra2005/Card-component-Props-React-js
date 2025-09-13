import Students from './Students'


function App() {
    return (
      <>  
       <Students username="Carl Marx" age={30} isStudent={true} />
       <Students username="Logan Paul" age={31} isStudent={false} />
       <Students username="Maxwell" age={56} isStudent={true} />
      </>
   
    );
}

export default App

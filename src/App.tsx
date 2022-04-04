import { Header } from "./Components/Header/Header";
import { ToolTip } from "./Components/ToolTip/ToolTip";
import { useAppSelector } from "./Redux/hooks"
const App:React.FC = () => {
  const misMatch = useAppSelector( match => match.misMatch)
  return (
    <div className="App">
      { misMatch.isActive && misMatch.isError && misMatch.value ? (<ToolTip isError={misMatch.isError} value={misMatch.value} />) : (<></>)}
      <Header />
    </div>
  );
}

export default App;

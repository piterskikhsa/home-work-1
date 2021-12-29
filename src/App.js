import './App.css';
import Profile from "./components/Profile.js";
import ProfileClass from "./components/ProfileClass.js";


function App() {
  return (
    <div className="App">
      <Profile name="Вася Ломкин" registredAt={new Date(2021, 5, 22)} />
      <Profile name="Люя Комук" registredAt={new Date(2021, 9, 4)} />
      <Profile name="Сосо Рупу" registredAt={new Date(2021, 5, 22)} />

      <ProfileClass name="Михаил Хобот" registredAt={new Date(2021, 5, 22)} />
      <ProfileClass name="Николай Зотов" registredAt={new Date(2021, 1, 22)} />
      <ProfileClass name="Роман Хапов" registredAt={new Date(2021, 3, 10)} />

    </div>
  );
}

export default App;

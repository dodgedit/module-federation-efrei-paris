import LocalButton from './Button';
import NewUserForm from '../../sharedComponent/src/userForm/newUserForm';
// import simpleButton from '../sharedComponent/src/buttons/simpleButton';

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    {
      <div>
        {console.log("Remote & Form2")}
      </div>
    }
    {/* <simpleButton/> */}

    <NewUserForm />
    <LocalButton />
  </div>
);

export default App;

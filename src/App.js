import './App.css';
import StartCourseForm from './components/StartCourseForm';

function App() {
  return (
    <div className="pl-[20%] pt-[10%] pb-[2%]">
      <header className="h-[62px]"></header>
      <main className="flex">
        <section className="w-[50%]">
          <h1 className="font-bold text-[35px] leading-[41px] mb-[57px]">
            Submit your details
          </h1>
          <StartCourseForm />
        </section>
        <section className="w-[50%]"></section>
      </main>
    </div>
  );
}

export default App;

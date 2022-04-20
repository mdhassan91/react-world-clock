import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className=" pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
           
          </div>
          <div className="flex-grow pl-6">
          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">CATEGORY</h2>
          </div>
        </div>
      </div>
     
      <div class="mb-3 pt-0">
  <input type="text" placeholder="Placeholder" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
</div>
    </div>
  </div>
</section>
         </div>
  );
}

export default App;

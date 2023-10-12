import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Inputsimulator from "@/components/About/Inputsimulator";
import Breadcrumb from "@/components/Common/Breadcrumb";


const AboutPage = () => {
  
  return (
    <>
      {/* <Breadcrumb
        pageName="S"
        description="SS"
          
      /> */}
       
       <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 w-full">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 center">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Simulator
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              The inputs that the user needs to enter to run a simulation:
             
              </p>

              <form>
                <div className="-mx-4 flex flex-wrap">

                <div className="w-full px-4 md:w-1/2">
                    
                    <div className="mb-8">
                      <label
                        htmlFor="sel"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Location/City 
                      </label>
                      <select className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      >
                       <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                       value="Baltimore">Baltimore</option>
                       <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="New York">New York</option>
                        <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Charlotte">Charlotte</option>
                       <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Fargo">Fargo</option>
                         <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Atlanta">Atlanta</option>
                       <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Chicago">Chicago</option>
                         <option  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Los Angeles">Los Angeles</option>
                       </select>
 

                    </div>

                    

                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    
                    <div className="mb-8">
                      <label
                        htmlFor="sel"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Models for disease transmission 
                      </label>
                      <select className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      >
                       <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                       value="POI- Wells-Reily">POI- Wells-Reily</option>
                       <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="New York">POI- Wells-Reily</option>
                        <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Charlotte">POI- Wells-Reily</option>
                       <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Fargo">Wells-Reily</option>
                         <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Atlanta">Others</option>
                       <option className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Chicago">Others</option>
                         <option  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      value="Los Angeles">Others</option>
                       </select>
 

                    </div>

                    

                  </div>


                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Number of Infectious people at the beginning(MAX?)
                      </label>
                      <input
                        type="number"
                        placeholder="Enter the number of infectious people at the start"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        The number of days of the run (MAX?)
                      </label>
                      <input
                        type="number"
                        placeholder="Enter the number of days of the run "
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>

                 
                  <div className="w-full px-4 md:w-1/4">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Mask wearing(%)
                      </label>
                      <input
                        type="range" id="volume" name="volume" min="0" max="100" step="0.01"

                        placeholder="Enter the number of days of the run "
                        className="w-full py-5 px-0"
                      />
            
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/4">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Testing capacity(%)
                      </label>
                      <input
                        type="range" id="volume" name="volume" min="0" max="100" step="0.01"

                        placeholder="Enter the number of days of the run "
                        className="w-full py-5 px-0"
                      />
            
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/4">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Vaccinated population(%)
                      </label>
                      <input
                        type="range" id="volume" name="volume" min="0" max="100" step="0.01"

                        placeholder="Enter the number of days of the run "
                        className="w-full py-5 px-0"
                      />
            
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/4">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Social distancing practiced(%)
                      </label>
                      <input
                        type="range" id="volume" name="volume" min="0" max="100" step="0.01"

                        placeholder="Enter the number of days of the run "
                        className="w-full py-5 px-0"
                      />
            
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/4">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Capacity restriction(%)
                      </label>
                      <input
                        type="range" id="volume" name="volume" min="0" max="100" step="0.01"

                        placeholder="Enter the number of days of the run "
                        className="w-full py-5 px-0"
                      />
            
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/4">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Quarantine compliance among population(%)
                      </label>
                      <input
                        type="range" id="volume" name="volume" min="0" max="100" step="0.01"

                        placeholder="Enter the number of days of the run "
                        className="w-full py-5 px-0"
                      />
            
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit
                    </button>
                  </div>

     <p>   IF DO NOT USE CAN DELETE THIS MEMO  </p>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Memo
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder=" The community to be simulated (from a dropdown menu)
                        The number of days of the run (bounded by the number of days for which movement has been stored)
                        The number of infectious people at the start of the simulation
                        A means for changing the default profile of a POI or a class of POIs to make them more conducive or less conducive to transmitting disease
                        Choice of model for disease transmission in POI- Wells-Reily or others (from dropdown menu)
                        Community level interventions:
                        Lockdown or capacity reduction of specific POIs or classes of POIs
                        Percentage of people wearing masks and effectiveness factors for mask-wearing
                        Percentage of people having had vaccination A, B, C,… and effectiveness factor of each
                        Degree of social distancing practiced in POIs
                        Degree of quarantining by those who are infectious
                        Others?
                        Means to upload DMP parameters (see DMP team for their requirements) "
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>




                </div>
              </form>
            </div>
          </div>
          
        </div>

    </section>




       {/* <Inputsimulator /> */}
      
       {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo />  */}
    </>
  );
};


export default AboutPage;

import { FC } from "react"
import "./KontaktForm.css"


interface KontaktFormProps {
  show: string
}
const KontaktForm:FC<KontaktFormProps> = ({show, ...props}) => {



    return <>
        <form  className={`main-kontaktform bg-bg max-w-[450px] shadow-lg p-5 rounded-lg fixed left-5 bottom-1 right-5 pb-[3rem] top-[10vh] md:bottom-10 md:right-[5rem] md:top-[10vh] overflow-y-auto overflow-hidden z-[9999999] ${show}`} {...props}>
            
                <h2 className="font-bold uppercase text-prime border border-bg rounded-lg p-5 text-center mb-5">Kontaktieren Sie mich</h2>
            
            <div className="anrede">
                <label htmlFor="anrede">Anrede *</label>
                <div className="anrede__inputs flex gap-5 my-5 items-center">
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="frau" type="radio" name="anrede" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="frau" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frau</label>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="herr" type="radio" name="anrede" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="herr" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Herr</label>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="none" type="radio" name="anrede" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="none" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Divers</label>
                    </div>
                </div>
            </div>
            <div className="md:flex gap-5">
                <div className="mb-6">
                    <label htmlFor="vorname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vorname *</label>
                    <input type="text" id="vorname" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="nachname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nachname *</label>
                    <input type="text" id="nachname" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
            </div>
            <div>
                <div className="mb-6">
                    <label htmlFor="mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-Mail *</label>
                    <input type="mail" id="mail" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tel</label>
                    <input type="tel" id="tel" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
            </div>
            <div className="nachricht mb-6">
                
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nachricht *</label>
                <textarea id="message" style={{resize:'none', minHeight:'200px'}} required className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hier können Sie Ihre Nachricht eintragen..."></textarea>

            </div>
            <div className="flex items-start mb-6">
                <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ich habe die <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Datenschutzerklärung</a> gelesen und bin damit einverstanden.</label>
            </div>
            <button type="submit" className="text-white bg-second text-bg hover:bg-second-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </>
}

export default KontaktForm
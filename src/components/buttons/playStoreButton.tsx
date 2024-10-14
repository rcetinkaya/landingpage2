import { FaFacebook } from "react-icons/fa";


export function PlayStoreButton() {

    return (
        <div className="bg-black h-[40px] text-white border border-white rounded-md p-2 flex items-center gap-x-1">
            <div>
           <img src="icons/playStore.svg" alt="Play Store" />
            </div>
            <div className="flex flex-col leading-3">
                <span className="text-[8.38px]">GET IT ON</span>
                <span className="text-[16.96px]">Google Play</span>
            </div>
        </div>
    )
}
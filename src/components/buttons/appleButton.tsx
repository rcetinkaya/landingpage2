
export function AppleButton() {

    return (
        <div className="w-auto h-[40px] bg-black  text-white border border-white rounded-md p-2 flex items-center gap-x-1">
            <div>
           <img src="icons/apple.svg" alt="App Store" />
            </div>
            <div className="flex flex-col leading-3">
                <span className="text-[8.38px]">Download on the</span>
                <span className="text-[16.96px]">App Store</span>
            </div>
        </div>
    )
}
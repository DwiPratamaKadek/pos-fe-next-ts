
import PosSidebar from "@/component/layout/PosSidebar"
import Card from "@/component/ui/Card"
import { useSidebar } from "@/hooks/useSideBar";

export default function PosPage () {

    const {isOpen, handleOpen} = useSidebar();

    return(
        <div>
            <PosSidebar isOpen={isOpen} toggle={handleOpen}/>
            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-200 mt-20 px-5 ${isOpen? "ml-64" : "ml-28"}`}>
                <Card />
            </div>
        </div>
    )
}
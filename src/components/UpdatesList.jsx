import ListIconComponent from "./ListIcon";

const UpdateListComponent = ({content}) => {
    return ( 
        <section className="w-full flex gap-2 text-base text-[#36384e]">
            <span><ListIconComponent /></span>
            <p className="font-semibold">{content}</p>
        </section>
     );
}
 
export default UpdateListComponent;
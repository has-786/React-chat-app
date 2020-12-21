import "./css/pdfdisplaydept.css";
export default function PdfDisplayDept(props)
{
    return <iframe src={props.link} id="pdf"></iframe>;
}

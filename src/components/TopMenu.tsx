import TopMenuItem from "./TopMenuItem";

export default function TopMenu(){
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px",borderBottom:"1px splid white"}}>
            <div></div>
            <TopMenuItem />
        </div>
    );
} 
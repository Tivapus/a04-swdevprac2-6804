
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Banner />
      <div style={{display: "flex", gap: "12px", padding: "20px", flexWrap: "wrap", justifyContent: "center", flexDirection: "row"}}>
        <Card venueName="The Bloom Pavilion" imgSrc="/images/bloom.jpg"/>
        <Card venueName="Spark Space" imgSrc="/images/sparkspace.jpg"/>
        <Card venueName="The Grand Table" imgSrc="/images/grandtable.jpg"/>
      </div>
    </div>
  );
}

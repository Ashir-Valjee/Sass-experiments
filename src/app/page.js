// import "./home.modules.scss";
import NewNavbar from "@/components/NewNavbar";
import "./style.scss";

export default function HomePage() {
  return (
    <div>
      <NewNavbar />
      <div className="homeContent">
        <h1> Home Page</h1>
        <p> This is a week 10 project week.</p>
      </div>
    </div>
  );
}

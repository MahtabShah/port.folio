import Accordion from "react-bootstrap/Accordion";

function Blog() {
  return (
    <Accordion className="w-100" defaultActiveKey={null}>
      <Accordion.Item className="">
        <Accordion.Header>
          CSS ki nayi kahaani: :has() selector,lets understand the logic 🌿
        </Accordion.Header>
        <Accordion.Body className="p-0">
          <div className="border-top explanation text-light p-3">
            <div className="p-3 rounded">
              <p>
                Web duniya roz badalti rehti hai, lekin kabhi-kabhi koi nayi
                cheez aati hai jo dil ko khush kar deti hai — bilkul uss naye
                phool ki tarah jo purani baghiya mein khil jaaye. CSS ka :has()
                selector bhi ek aisi hi meethi nayi blessing hai.
              </p>
              <p>
                :has() kya karta hai? <br />
                Beta, ab tak CSS humesha parent se child ko style deta tha.
                Magar :has() ke aane se hum keh sakte hain: <br />
                “Aray bhai, agar andar yeh element ho, tab parent ko style
                karo.” Bilkul aise jaise: Agar thali me roti ho, to saath mein
                makhan bhi rakh do. Yeh parent-selector ki tarah kaam karta hai.
              </p>
              <h4>Ek chota-sa example (desi style)</h4>
              <p>Maano tumhare paas ek form hai. Tum chahte ho:</p>
              <p>Agar input me error ho, to pura form red border dikhaaye.</p>
              <div>Pehle yeh mushkil tha… ab bohot aasaan:</div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Blog;

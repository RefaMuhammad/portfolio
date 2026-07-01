import floodSightImage from "../assets/images/projects/Floodsight.jpg";
import Organify from "../assets/images/projects/Organify.jpeg";
import SendThePicture from "../assets/images/projects/SendThePicture.png";
import ScannerVIN from "../assets/images/projects/Scanner_VIN.jpeg";

const projectsData = [
  {
    id: 1,
    missionId: "0x01",
    title: "ORGANIFY",
    description:
      "Mobile task management and productivity application built with Flutter & SQLite. Features include task scheduling, data visualization, and an integrated Chatbot assistant.",
    imageSrc: Organify,
    sourceLink:
      "https://play.google.com/store/apps/details?id=com.ifuinbandung.organify&pcampaignid=web_shares",
  },
  {
    id: 2,
    missionId: "0x02",
    title: "FLOODSIGHT",
    description:
      "Web Prediksi Banjir Berbasis CNN. Developed an AI-driven system to predict flood risks using convolutional neural networks and weather data.",
    imageSrc: floodSightImage,
    sourceLink: "https://fe-flood-sight.vercel.app/",
  },
  {
    id: 3,
    missionId: "0x03",
    title: "SEND_THE_PICT",
    description:
      "A playful web application parody inspired by 'SendTheSong'. It provides a platform for users to anonymously share untold stories and heartfelt messages through picture dedications.",
    imageSrc: SendThePicture,
    sourceLink: "https://sendthesong.xyz/",
  },
  {
    id: 4,
    missionId: "0x04",
    title: "SCANNER_VIN",
    description:
      "VIN extraction system for logistics documents. Utilizes BiGRU architecture and Character-Level NER to accurately process and extract vehicle identifiers from noisy OCR text.",
    imageSrc: ScannerVIN,
    sourceLink: "https://github.com/RefaMuhammad/scanner-vin.git",
  },
];

export default projectsData;

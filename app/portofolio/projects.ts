export type Project = {
  title: string;
  desc: string;
  detail: string;
  image: string;
  images: string[];
  tags: string[];
  client?: string;
  clientLogo?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Crop Commodity Mapping using Machine Learning Approach",
    desc: "National-scale crop monitoring using multi-sensor satellite data and machine learning to detect planting phases and support data-driven agricultural planning.",
    detail:
      "Developed a national-scale crop planting phase monitoring system using multi-sensor satellite data and machine learning to support data-driven agricultural planning. The project integrates Sentinel-1, Sentinel-2, Landsat, and MODIS imagery to generate dense NDVI time series and accurately detect planting dates (H0) across agricultural areas. By combining deep learning–based SAR-to-NDVI reconstruction and spatio-temporal data fusion, the system reduces cloud-related data gaps and improves temporal monitoring of crop growth. The resulting model enables more precise identification of planting cycles, supporting efficient fertilizer allocation, agricultural monitoring, and national food security planning.",
    image: "/projects/crop-commodity-mapping/deep-learning-ndvi.webp",
    images: [
      "/projects/crop-commodity-mapping/estarfm.webp",
      "/projects/crop-commodity-mapping/grafik-karanganyar.webp",
      "/projects/crop-commodity-mapping/grrafik-magetan.webp",
    ],
    tags: ["GIS", "Remote Sensing", "Geo AI", "Crop Mapping", "Spatial Modelling"],
  },
  {
    title: "Deep Learning for Forest Cover Mapping",
    desc: "Geo-AI solutions for LULC and biomass mapping using LiDAR and multispectral data, supporting Indonesia’s FOLU Net Sink 2030 with validated, policy-ready insights.",
    detail:
      "Supporting national climate targets through Indonesia’s FOLU Net Sink 2030 program by providing Geo-AI solutions for natural resource and carbon mapping. This project focuses on developing machine learning and deep learning-based workflows that integrate LiDAR data and multispectral imagery for high-precision Land Use/Land Cover (LULC) modeling and above-ground biomass (AGB) estimation. The reliability of these inference models has been tested and validated through extensive field surveys, yielding accurate forest inventory data and land use metrics to support ecosystem evaluation policies in Indonesia.",
    image: "/projects/forest-cover-mapping/lulc-prediction.webp",
    images: [
      "/projects/forest-cover-mapping/paper-2.webp",
      "/projects/forest-cover-mapping/paper1.webp",
      "/projects/forest-cover-mapping/whatsapp-image-2024-09-22-at-07-19-19-f7b5f3a5.webp",
      "/projects/forest-cover-mapping/whatsapp-image-2024-09-25-at-12-38-33-7f81943e.webp",
      "/projects/forest-cover-mapping/whatsapp-image-2025-05-21-at-13-26-59-bbda2855.webp",
      "/projects/forest-cover-mapping/whatsapp-image-2024-09-25-at-12-55-37-c85a8034.webp",
    ],
    tags: ["GIS", "Remote Sensing", "Geo AI", "Forest Cover"],
  },
  {
    title: "Seaweed Cover Mapping",
    desc: "Deep learning–based satellite analysis to map seaweed production and monitor dynamic changes driven by market and climate factors.",
    detail:
      "This project develops a deep learning-based tool for automatically analyzing satellite imagery, specifically designed to map and measure seaweed production areas in South Sulawesi. Through this tool, we successfully identified drastic data fluctuations: there was a surge in production area expansion during the 2022–2023 period due to high market prices, which then plummeted by up to 50% in 2024 due to falling prices and extreme weather challenges. This solution offers a practical foundation for the Indonesian government to manage the seaweed industry amid the threat of climate change, and these findings will be published online to support better policy-making.",
    image: "/projects/seaweed-cover-mapping/output/preview-benchmark.webp",
    images: [
      "/projects/seaweed-cover-mapping/output/2024.webp",
      "/projects/seaweed-cover-mapping/output/augment_sam_2.webp",
      "/projects/seaweed-cover-mapping/output/layout-peta-report-koneksi.webp",
      "/projects/seaweed-cover-mapping/p6150514.webp",
      "/projects/seaweed-cover-mapping/p6120181.webp",
      "/projects/seaweed-cover-mapping/p6140271.webp",
      "/projects/seaweed-cover-mapping/pa160003.webp",
      "/projects/seaweed-cover-mapping/pa160163.webp",
      "/projects/seaweed-cover-mapping/pa160157.webp",
    ],
    tags: ["GIS", "Remote Sensing", "Geo AI", "Seaweed"],
  },
  {
    title: "Workshop: Geo-AI System for Carbon Storage Assessment",
    desc: "Delivered Geo-AI and remote sensing training for forest carbon monitoring, enabling practitioners to apply AI-driven geospatial methods in support of Indonesia’s FOLU Net Sink 2030 initiative.",
    detail:
      "Delivered a technical training program on Geo-AI, remote sensing, and machine learning for forest carbon monitoring, supporting Indonesia’s FOLU Net Sink 2030 initiative. Designed and facilitated hands-on sessions covering deep learning land-cover classification, UAV/LiDAR data acquisition, and carbon stock estimation workflows using Python, R, and Google Colab. Enabled researchers and practitioners to apply data-driven geospatial methods for scalable forest carbon assessment and environmental monitoring.",
    image: "/projects/geoai-workshop/dsc07120.webp",
    images: [
      "/projects/geoai-workshop/dsc07120.webp",
      "/projects/geoai-workshop/dsc07393.webp",
      "/projects/geoai-workshop/dsc07392.webp",
      "/projects/geoai-workshop/dsc08240.webp",
      "/projects/geoai-workshop/dsc07771.webp",
      "/projects/geoai-workshop/dsc07529.webp",
    ],
    tags: ["GIS", "Remote Sensing", "Geo AI", "Workshop"],
  },
];

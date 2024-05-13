interface ILocation {
  province: string;
  districts: IDistrict[];
}

interface IDistrict {
  name: string;
  municipals: string[];
}

export const allLocations: ILocation[] = [
  {
    province: "Lumbini",
    districts: [
      {
        name: "Rupandehi",
        municipals: [
          "Kanchan Rural Municipality",
          "Siyari Rural Municipality",
          "Rohini Rural Municipality",
          "Gaidahawa Rural Municipality",
          "Omsatiya Rural Municipality",
          "Sudhdhodhan Rural Municipality",
          "Mayadevi Rural Municipality",
          "Marchawari Rural Municipality",
          "Kotahimai Rural Municipality",
          "Sammarimai Rural Municipality",
          "Butwal Sub-metropolitan City",
          "Lumbini Sanskritik Municipality",
          "Devdaha Municipality",
          "Sainamaina Municipality",
          "Siddharthanagar Municipality",
          "Tillotama Municipality",
        ],
      },
    ],
  },
];

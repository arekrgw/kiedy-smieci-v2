import { GarbageDate } from "./models/garbageDate";

export default () => {
  const types = {
    zm: "5ef30888ed4a8be5efe17012",
    pap: "5ef3083eed4a8be5efe1700f",
    szk: "5ef30861ed4a8be5efe17010",
    tw: "5ef22139ed562b349cc7e8b7",
    bio: "5ef30874ed4a8be5efe17011",
  };
  const reg = "5ef22c025d04fe023023c6cd";
  const obj = [
    {
      date: new Date("2020-06-01"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-06-01"),
      garbageType: types.pap,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-06-04"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-06-15"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-06-15"),
      garbageType: types.tw,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-06-18"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-07-02"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-07-06"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-07-06"),
      garbageType: types.pap,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-07-16"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-07-20"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-07-20"),
      garbageType: types.tw,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-07-29"),
      garbageType: types.szk,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-08-3"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-08-3"),
      garbageType: types.pap,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-08-6"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-08-17"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-08-17"),
      garbageType: types.tw,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-08-20"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-09-3"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-09-7"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-09-7"),
      garbageType: types.pap,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-09-21"),
      garbageType: types.tw,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-10-1"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-10-5"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-10-5"),
      garbageType: types.pap,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-10-19"),
      garbageType: types.tw,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-10-28"),
      garbageType: types.szk,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-11-2"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-11-2"),
      garbageType: types.pap,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-11-5"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-11-16"),
      garbageType: types.tw,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-12-3"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-12-17"),
      garbageType: types.zm,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-12-7"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-12-7"),
      garbageType: types.pap,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-12-21"),
      garbageType: types.bio,
      garbageRegion: reg,
    },
    {
      date: new Date("2020-12-21"),
      garbageType: types.tw,
      garbageRegion: reg,
    },
  ];
  return obj;
};

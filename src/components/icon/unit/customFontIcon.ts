/**
 * @file font icon
 * @date 2021-08-09
 * @author xuejie.he
 * @lastModify xuejie.he 2021-08-09
 */

export interface IconDefinition {
  iconName: string;
  prefix?: string;
  icon: [number, number, never[], string, string];
  pathList?: (React.SVGProps<SVGPathElement> & { pid?: string })[];
}

export const dropdown: IconDefinition = {
  iconName: "dropdown",
  icon: [
    1737,
    1024,
    [],
    "59296",
    "M858.77317374 859.57874545a54.40251331 54.40251331 0 0 1-40.62054303-18.1341711l-522.26412761-580.29347527a54.40251331 54.40251331 0 0 1 81.24108605-72.53668442l481.64358459 535.32073076 493.24945344-536.04609721a54.40251331 54.40251331 0 1 1 79.79035311 72.5366844l-529.51779632 580.29347459a55.12788045 55.12788045 0 0 1-43.52201023 18.85953825z",
  ],
};

export const open: IconDefinition = {
  iconName: "open",
  icon: [
    1024,
    1024,
    [],
    "59286",
    "M219.734138 1023.981876a45.018879 45.018879 0 0 1-34.494985-14.61652 45.018879 45.018879 0 0 1 7.015929-61.97404l541.980527-434.987608L192.255082 79.170083A45.018879 45.018879 0 0 1 185.239153 15.44206 44.434218 44.434218 0 0 1 247.213194 10.180113l584.660762 467.72861a44.434218 44.434218 0 0 1 0 68.98997l-584.660762 467.72861a44.434218 44.434218 0 0 1-27.479056 9.354573z",
  ],
};

export const top: IconDefinition = {
  iconName: "top",
  icon: [
    1024,
    1024,
    [],
    "13900",
    "M113.777778 91.420444C113.777778 70.712889 128.568889 56.888889 150.755556 56.888889h740.408888c22.186667 0 36.977778 13.824 36.977778 34.531555s-14.791111 34.531556-36.977778 34.531556H150.812444c-22.186667 0-37.034667-13.824-37.034666-34.531556zM558.023111 315.960889v673.507555c0 20.707556-14.791111 34.531556-37.034667 34.531556-22.186667 0-36.977778-13.824-36.977777-34.531556V315.904l-303.616 283.306667a37.546667 37.546667 0 0 1-51.768889 0 31.857778 31.857778 0 0 1 0-48.355556L494.990222 208.782222a41.528889 41.528889 0 0 1 25.941334-10.353778c7.395556 0 18.488889 3.470222 25.884444 10.353778l366.478222 341.959111a31.857778 31.857778 0 0 1 0 48.355556 37.546667 37.546667 0 0 1-51.768889 0L558.023111 315.960889z",
  ],
};

export const Chat: IconDefinition = {
  iconName: "Chat",
  icon: [
    1024,
    1024,
    [],
    "13626",
    "M677.831111 328.135111a36.010667 36.010667 0 1 1 0 72.021333H311.409778a36.010667 36.010667 0 0 1 0-72.021333h366.421333zM529.635556 495.274667a36.010667 36.010667 0 0 1 0 72.021333H311.409778a36.010667 36.010667 0 1 1 0-72.021333h218.112z M907.946667 43.975111a108.088889 108.088889 0 0 1 108.088889 108.032v555.064889a108.088889 108.088889 0 0 1-108.088889 108.032H291.498667l-164.181334 142.791111a71.509333 71.509333 0 0 1-52.280889 17.521778 72.135111 72.135111 0 0 1-66.958222-71.850667V152.007111A108.088889 108.088889 0 0 1 115.996444 43.975111h792.007112z m36.067555 663.096889V152.007111a36.010667 36.010667 0 0 0-36.010666-36.010667H115.996444a36.010667 36.010667 0 0 0-36.010666 36.010667v751.559111l164.238222-142.791111c13.084444-11.377778 29.866667-17.635556 47.217778-17.692444h616.561778a36.010667 36.010667 0 0 0 36.010666-36.010667z",
  ],
};

export const Chat02: IconDefinition = {
  iconName: "Chat02",
  icon: [1024, 1024, [], "12801", ""],
  pathList: [
    {
      d: "M944.014222 707.128889V151.950222a36.010667 36.010667 0 0 0-36.010666-36.010666H115.996444a36.010667 36.010667 0 0 0-36.010666 36.010666v751.559111l164.238222-142.791111c13.084444-11.377778 29.866667-17.635556 47.217778-17.692444h616.561778a36.010667 36.010667 0 0 0 36.010666-36.010667zM907.946667 43.918222a108.088889 108.088889 0 0 1 107.975111 108.032v555.064889a108.088889 108.088889 0 0 1-107.975111 108.032H291.441778l-164.181334 142.791111a71.509333 71.509333 0 0 1-52.280888 17.521778 72.135111 72.135111 0 0 1-66.958223-71.850667V152.007111A108.088889 108.088889 0 0 1 115.996444 43.975111h792.007112z",
      fill: "#4D4D4D",
      pid: "12802",
    },
    {
      d: "M274.773333 361.813333a34.133333 34.133333 0 0 1 34.133334-34.133333h371.939555a34.133333 34.133333 0 0 1 0 68.266667H308.963556a34.133333 34.133333 0 0 1-34.133334-34.133334zM274.773333 528.839111a34.133333 34.133333 0 0 1 34.133334-34.133333h224.995555a34.133333 34.133333 0 1 1 0 68.266666H308.963556a34.133333 34.133333 0 0 1-34.133334-34.133333z",
      fill: "#22A6B3",
      pid: "12803",
    },
  ],
};

export const smile: IconDefinition = {
  iconName: "smile",
  icon: [1024, 1024, [], "12937", ""],
  pathList: [
    {
      d: "M651.636364 495.709091a36.165818 36.165818 0 0 0 36.072727-36.119273V390.888727a36.165818 36.165818 0 0 0-72.192 0v68.701091c0 19.921455 16.197818 36.119273 36.072727 36.119273z m-278.946909 0a35.886545 35.886545 0 0 0 36.119272-36.119273V390.888727a36.165818 36.165818 0 0 0-72.192 0v68.701091c0 19.921455 16.197818 36.119273 36.072728 36.119273z",
      fill: "#3CBBC7",
      pid: "12938",
    },
    {
      d: "M678.772364 97.792a427.380364 427.380364 0 0 0-166.632728-33.792 429.614545 429.614545 0 0 0-214.202181 802.117818c2.234182 1.256727 6.423273 5.12 3.630545 10.798546-8.192 15.499636-34.210909 52.503273-96.907636 58.786909-4.189091 0.465455 0.232727 4.608 6.423272 6.516363 23.877818 7.261091 72.098909 17.873455 128.791273 17.873455 49.803636 0 106.216727-8.192 158.626909-33.978182a24.855273 24.855273 0 0 1 10.752-3.025454h2.513455a429.707636 429.707636 0 0 0 396.008727-262.702546c92.113455-218.670545-10.379636-470.481455-229.003636-562.594909z m187.019636 545.093818A383.069091 383.069091 0 0 1 512 877.614545h-2.513455c-10.100364 0-21.224727 2.699636-31.092363 7.58691-39.610182 19.502545-86.109091 29.323636-138.519273 29.323636-2.606545 0-5.213091-0.139636-7.68-0.139636 4.375273-6.190545 7.586909-11.682909 9.867636-15.965091l0.325819-0.605091 0.186181-0.605091a53.713455 53.713455 0 0 0-21.876363-70.888727C152.994909 730.298182 83.083636 523.124364 158.394182 344.715636a383.069091 383.069091 0 0 1 353.745454-234.914909c51.153455 0 101.236364 10.24 148.945455 30.487273 195.025455 82.106182 286.906182 307.618909 204.706909 502.597818z",
      fill: "#757575",
      pid: "12939",
    },
    {
      d: "M512.977455 714.612364c-72.610909 0-139.496727-40.587636-171.985455-100.398546h-28.299636c33.512727 72.471273 112.500364 124.974545 200.285091 124.974546 87.691636 0 166.818909-52.503273 200.28509-124.974546h-28.16c-32.535273 59.810909-99.514182 100.398545-172.12509 100.398546z",
      fill: "#3CBBC7",
      pid: "12940",
    },
  ],
};

export const fillPicture: IconDefinition = {
  iconName: "fill-picture",
  icon: [
    1024,
    1024,
    [],
    "59355",
    "M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z",
  ],
};

export const nextArrow: IconDefinition = {
  iconName: "nextArrow",
  icon: [
    1251,
    1024,
    [],
    "58910",
    "M1234.488889 483.555556l-415.288889-415.288889c-17.066667-17.066667-45.511111-17.066667-62.577778 0s-17.066667 45.511111 0 62.577777l347.022222 347.022223H45.511111c-28.444444 0-45.511111 17.066667-45.511111 39.822222 0 22.755556 17.066667 45.511111 45.511111 45.511111h1052.444445l-335.644445 335.644444c-17.066667 17.066667-17.066667 45.511111 0 62.577778s45.511111 17.066667 62.577778 0l415.288889-415.288889c11.377778-17.066667 11.377778-45.511111-5.688889-62.577777z",
  ],
};

export const mark1: IconDefinition = {
  iconName: "mark",
  icon: [
    1241,
    1024,
    [],
    "59459",
    "M445.292763 917.144034a391.744939 391.744939 0 0 1-93.593361-26.589023A406.989312 406.989312 0 0 1 106.371349 514.054445 403.444109 403.444109 0 0 1 504.852174 106.356092a395.290142 395.290142 0 0 1 336.439772 188.959324 53.178046 53.178046 0 1 0 90.048158-56.014209 499.873633 499.873633 0 0 0-425.424369-239.301207A510.154722 510.154722 0 0 0 0.015257 514.054445a513.345405 513.345405 0 0 0 309.850748 474.348171 500.228153 500.228153 0 0 0 119.473344 35.452031h8.153967a53.319854 53.319854 0 0 0 7.799447-106.356092zM1225.237438 269.435433a52.823526 52.823526 0 0 0-75.158305 0L661.55015 757.964416l-180.805357-181.868917a53.178046 53.178046 0 0 0-75.158305 75.158305l193.213568 194.277128a88.275556 88.275556 0 0 0 62.750094 25.879983 88.275556 88.275556 0 0 0 62.750094-25.879983L1225.237438 344.593738a52.823526 52.823526 0 0 0 0-75.158305z",
  ],
};
export default {
  mark1,
  dropdown,
  open,
  top,
  Chat,
  Chat02,
  smile,
  fillPicture,
  nextArrow,
};

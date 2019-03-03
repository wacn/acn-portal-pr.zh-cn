//define(['CalculatorConst'], function(CalculatorConst){
//    var PriceTierEnum = {
//        Free: "0",
//        Linear: "-1",
//        Fixed: "-2",
//    };

//    var PricePeriodEnum = {
//        Hourly: "0",
//        Monthly: "1",
//    };
var CalculatorData = {
    Services: {
        "website": {
            Name: "Web 应用",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "在多租户环境中每个子区域免费运行多达 10 个 Web 应用。根据流量增长情况无缝升级到付费的共享多租户模型或保留实例模型。",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            },
            {
                Name: "共享",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "共享功能：在多租户环境中每个子区域免费运行多达 100 个 Web 应用，存储空间 1GB，出站数据传输为无限。",//this text need to be changed.
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.11",
                    }]
                }]
            },
            {
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: CalculatorConst.SmallSize,
                        Description: CalculatorConst.SmallSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.45",
                    },
                    {
                        Name: CalculatorConst.MediumSize,
                        Description: CalculatorConst.MediumSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.89",
                    },
                    {
                        Name: CalculatorConst.LargeSize,
                        Description: CalculatorConst.LargeSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.79",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: CalculatorConst.SmallSize,
                        Description: CalculatorConst.SmallSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6",
                    },
                    {
                        Name: CalculatorConst.MediumSize,
                        Description: CalculatorConst.MediumSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.19",
                    },
                    {
                        Name: CalculatorConst.LargeSize,
                        Description: CalculatorConst.LargeSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.38",
                    }]
                }]
            }]
        },
        "website-ssl": {
            Name: "Web 应用 - SSL 连接",
            Types: [{
                Name: "SNI SSL",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "新式浏览器",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "44.68",
                    }]
                }]
            },
            {
                Name: "IP SSL",
                Features: [{
                    Name: "IP SSL",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "所有浏览器",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "193.62",
                    }]
                }]
            }]
        },


        "app-service": {
            Name: "应用服务",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "在多租户环境中每个子区域免费运行多达 10 个 Web、移动或 API 应用。根据流量增长情况无缝升级到付费的共享多租户模型或保留实例模型。",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            },
            {
                Name: "共享",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "共享功能：在多租户环境中每个子区域免费运行多达 100 个 Web、移动或 API 应用，存储空间 1GB，出站数据传输为无限。",//this text need to be changed.
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.0827",
                    }]
                }]
            },
            {
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.SmallSize,
                        Description: CalculatorConst.SmallSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.45",
                    },
                    {
                        Name: CalculatorConst.MediumSize,
                        Description: CalculatorConst.MediumSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.89",
                    },
                    {
                        Name: CalculatorConst.LargeSize,
                        Description: CalculatorConst.LargeSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.79",
                    }
                    ]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.SmallSize,
                        Description: CalculatorConst.SmallSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.60",
                    },
                    {
                        Name: CalculatorConst.MediumSize,
                        Description: CalculatorConst.MediumSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.19",
                    },
                    {
                        Name: CalculatorConst.LargeSize,
                        Description: CalculatorConst.LargeSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.38",
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.SmallSize,
                        Description: CalculatorConst.SmallSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9716",
                    },
                    {
                        Name: CalculatorConst.MediumSize,
                        Description: CalculatorConst.MediumSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.943",
                    },
                    {
                        Name: CalculatorConst.LargeSize,
                        Description: CalculatorConst.LargeSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8864",
                    }]
                }]
            }]
        },


        "app-service-custom-domain": {
            Name: "应用服务 - 自定义域",
            Types: [{
                Name: "SNI SSL",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "自定义域按年付费，价格是 ￥ 78.798/年（包含隐私保护）。",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.5665",
                    }]
                }]
            }]
        },


        "app-service-ssl": {
            Name: "应用服务 - SSL 连接",
            Types: [{
                Name: "SNI SSL",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "新式浏览器",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "44.68",
                    }]
                }]
            },
            {
                Name: "IP SSL",
                Features: [{
                    Name: "IP SSL",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "所有浏览器",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "193.62",
                    }]
                }]
            }]
        },


        "virtual-machines-windows": {
            Name: "虚拟机 - Windows",
            Types: [
                {
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: CalculatorConst.A0VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.11",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: CalculatorConst.A1VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.31",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: CalculatorConst.A2VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.82",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.64",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.28",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    Description: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.13",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.36",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.94",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.88",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.71",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "B 系列/BS系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B1/B1S",
                        Description: "1个内核，1GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.17"
                    },
                    {
                        Name: "B2/B2S",
                        Description: "2个内核，4GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.66"
                    }]
                },
                {
                    Name: "B 系列 / BS 系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B1M/B1MS",
                        Description: "1个内核，2GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.28"
                    },
                    {
                        Name: "B2M/B2MS",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.12"
                    },
                    {
                        Name: "B4M/B4MS",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.23"
                    },
                    {
                        Name: "B8M/B8MS",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.46"
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5405",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.0810",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.1620",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.3355",
                    }]
                },
                {
                    Name: "Av2系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9665",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9394",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8775",
                    }]
                },
                {
                    Name: "Dv3 系列/DSv3 系列",
                    Description: "Dv3 系列/DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D2 v3/DS2 v3",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.25"
                    },
                    {
                        Name: "D4 v3/DS4 v3",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.52"
                    },
                    {
                        Name: "D8 v3/DS8 v3",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.04"
                    }]
                },
                {
                    Name: "Dv3 系列 / DSv3 系列",
                    Description: "Dv3 系列/DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D16 v3/DS16 v3",
                        Description: "16个内核，64GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.08"
                    },
                    {
                        Name: "D32 v3/DS32 v3",
                        Description: "32个内核，128GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "20.15"
                    },
                    {
                        Name: "D64 v3/DS64 v3",
                        Description: "64个内核，256GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40.3"
                    }]
                },
                {
                    Name: "D 系列/DS 系列",
                    Description: "D 系列/DS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D1/DS1",
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.48"
                    },
                    {
                        Name: "D2/DS2",
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1"
                    },
                    {
                        Name: "D3/DS3",
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.01"
                    },
                    {
                        Name: "D4/DS4",
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05"
                    }]
                },
                {
                    Name: "D 系列 / DS 系列",
                    Description: "D 系列/DS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D11/DS11",
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7"
                    },
                    {
                        Name: "D12/DS12",
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.41"
                    },
                    {
                        Name: "D13/DS13",
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.83"
                    },
                    {
                        Name: "D14/DS14",
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.67"
                    }]
                },
                {
                    Name: "M 系列 ",
                    Description: "M 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "M32ls",
                        Description: CalculatorConst.M32lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "33.02"
                    },
                    {
                        Name: "M64ls",
                        Description: CalculatorConst.M64lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "63.33"
                    },
                    {
                        Name: "M8ms",
                        Description: CalculatorConst.M8msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.42"
                    },
                    {
                        Name: "M16ms",
                        Description: CalculatorConst.M16msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.73"
                    },
                    {
                        Name: "M32ms",
                        Description: CalculatorConst.M32msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "69.56"
                    },
                    {
                        Name: "M64ms",
                        Description: CalculatorConst.M64msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "119.94"
                    },
                    {
                        Name: "M128ms",
                        Description: CalculatorConst.M128msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "298.71"
                    },
                    {
                        Name: "M64s",
                        Description: CalculatorConst.M64sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "84.03"
                    },
                    {
                        Name: "M128s",
                        Description: CalculatorConst.M128sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "168.08"
                    },
                    {
                        Name: "M32ts",
                        Description: CalculatorConst.M32tsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "31.71"
                    }]
                },
                {
                    Name: "Ev3 系列/ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E2 v3/E2s v3",
                        Description: "2个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.6"
                    },
                    {
                        Name: "E4 v3/E4s v3",
                        Description: "4个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.21"
                    },
                    {
                        Name: "E8 v3/E8s v3",
                        Description: "8个内核，64GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.41"
                    },
                    {
                        Name: "E16 v3/E16s v3",
                        Description: "16个内核，128GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.84"
                    }]
                },
                {
                    Name: "Ev3 系列 / ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E20 v3/ES20 v3",
                        Description: "20个内核，160GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16"
                    },
                    {
                        Name: "E32 v3/E32s v3",
                        Description: "32个内核，256GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.66"
                    }]
                },
                {
                    Name: "Ev3 系列 /ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E64i v3/E64is v3",
                        Description: "64个内核，432GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "51.33"
                    },
                    {
                        Name: "E64 v3/E64s v3",
                        Description: "64个内核，432GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "51.33"
                    }]
                },
                {
                    Name: "Dv2系列/DSv2系列",
                    Description: "Dv2系列/DSv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D1 v2/DS1 v2",
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.53"
                    },
                    {
                        Name: "D2 v2/DS2 v2",
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.11"
                    },
                    {
                        Name: "D3 v2/DS3 v2",
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.22"
                    },
                    {
                        Name: "D4 v2/DS4 v2",
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.45"
                    }]
                },
                {
                    Name: "Dv2 系列 / DSv2 系列",
                    Description: "Dv2系列/DSv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D5 v2/DS5 v2",
                        Description: CalculatorConst.D5V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.56"
                    },
                    {
                        Name: "D11 v2/DS11 v2",
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.88"
                    },
                    {
                        Name: "D12 v2/DS12 v2",
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76"
                    }]
                },
                {
                    Name: "Dv2系列 / DSv2系列",
                    Description: "Dv2系列/DSv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D13 v2/DS13 v2",
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.51"
                    },
                    {
                        Name: "D14 v2/DS14 v2",
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.03"
                    },
                    {
                        Name: "D15 v2/DS15 v2",
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.79"
                    }]
                },
                {
                    Name: "Fv2系列/FSv2系列",
                    Description: "Fv2系列/FSv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F2 v2/FS2 v2",
                        Description: "2 vCPU，4 GiB RAM，16 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.166"
                    },
                    {
                        Name: "F4 v2/FS4 v2",
                        Description: "4 vCPU，8 GiB RAM，32 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.332"
                    },
                    {
                        Name: "F8 v2/FS8 v2",
                        Description: "8 vCPU，16 GiB RAM，64 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.664"
                    }]
                },
                {
                    Name: "Fv2系列 / FSv2系列",
                    Description: "Fv2系列 / FSv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F16 v2/FS16 v2",
                        Description: "16 vCPU，32 GiB RAM，128 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.328"
                    },
                    {
                        Name: "F32 v2/FS32 v2",
                        Description: "32 vCPU，64 GiB RAM，256 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.656"
                    }]
                },
                {
                    Name: "Fv2 系列/FSv2 系列",
                    Description: "Fv2 系列/FSv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F64 v2/FS64 v2",
                        Description: "64 vCPU，128 GiB RAM，512 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "69.312"
                    },
                    {
                        Name: "F72 v2/FS72 v2",
                        Description: "72 vCPU，144 GiB RAM，576 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "138.624"
                    }]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.46",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.97",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.95",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.91",
                    },
                    {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.53",
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.46",
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.97",
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.95",
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.91",
                    },
                    {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.53",
                    }]
                },
                {
                    Name: "NCsv3 系列",
                    Description: "NCsv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "NC6s v3",
                        Description: "6 个核心，112 GiB RAM，336 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26.16"
                    },
                    {
                        Name: "NC12s v3",
                        Description: "12 个核心，224 GiB RAM，672 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "52.32"
                    },
                    {
                        Name: "NC24s v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "104.65"
                    },
                    {
                        Name: "NC24rs v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "115.11"
                    }]
                }]
            }]
        },
        "virtual-machines-linux": {
            Name: "虚拟机 - Linux",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: CalculatorConst.A0VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.11",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: CalculatorConst.A1VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.25",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: CalculatorConst.A2VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.66",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.31",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4VMWBasicSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.62",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [
                    {
                    Name: "A 系列",
                    Description: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.13",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.29",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.75",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.51",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.01",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.62",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.25",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.49",
                    }]
                },
                {
                    Name: "B 系列/BS 系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B1/B1S",
                        Description: "1个内核，1GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.12",
                    },
                    {
                        Name: "B2/B2S",
                        Description: "2个内核，4GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.48",
                    }]
                },
                {
                    Name: "B系列 / BS系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B1M/B1MS",
                        Description: "1个内核，2GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.23"
                    },
                    {
                        Name: "B2M/B2MS",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.96"
                    },
                    {
                        Name: "B4M/B4MS",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.89"
                    },
                    {
                        Name: "B8M/B8MS",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.79"
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.4370",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.8625",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7365",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.4615",
                    }]
                },
                {
                    Name: "Av2系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8630"
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.7338"
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.4635"
                    }]
                },

                {
                    Name: "Dv3 系列 / DSv3 系列",
                    Description: "Dv3 系列 / DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D2 v3/DS2 v3",
                        Description: "2个内核，8GiB RAM，50GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.85"
                    },
                    {
                        Name: "D4 v3/DS4 v3",
                        Description: "4个内核，16GiB RAM，100GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.68"
                    },
                    {
                        Name: "D8 v3/DS8 v3",
                        Description: "8个内核，32GiB RAM，200GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.36"
                    }]
                },
                {
                    Name: "Dv3系列/DSv3系列",
                    Description: "Dv3 系列 / DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D16 v3/DS16 v3",
                        Description: "16个内核，64GiB RAM，400GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.73"
                    },
                    {
                        Name: "D32 v3/DS32 v3",
                        Description: "32个内核，128GiB RAM，800GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.46"
                    },
                    {
                        Name: "D64 v3/DS64 v3",
                        Description: "64个内核，256GiB RAM，1,600GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26.91"
                    }]
                },
                {
                    Name: "D 系列/DS 系列",
                    Description: "D 系列/DS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [
                        {
                        Name: "D1/DS1",
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.44"
                    },
                    {
                        Name: "D2/DS2",
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.92"
                    },
                    {
                        Name: "D3/DS3",
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.85"
                    },
                    {
                        Name: "D4/DS4",
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.73"
                    }]
                },
                {
                    Name: "D系列 / DS系列",
                    Description: "D 系列/DS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D11/DS11",
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.57"
                    },
                    {
                        Name: "D12/DS12",
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.14"
                    },
                    {
                        Name: "D13/DS13",
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.29"
                    },
                    {
                        Name: "D14/DS14",
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.58"
                    }]
                },
                {
                    Name: "M 系列",
                    Description: "M 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "M32ls",
                        Description: CalculatorConst.M32lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.66"
                    },
                    {
                        Name: "M64ls",
                        Description: CalculatorConst.M64lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.14"
                    },
                    {
                        Name: "M8ms",
                        Description: CalculatorConst.M8msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.07"
                    },
                    {
                        Name: "M16ms",
                        Description: CalculatorConst.M16msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "30.5"
                    },
                    {
                        Name: "M32ms",
                        Description: CalculatorConst.M32msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "60.2"
                    },
                    {
                        Name: "M64ms",
                        Description: CalculatorConst.M64msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "101.22"
                    },
                    {
                        Name: "M128ms",
                        Description: CalculatorConst.M128msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "261.26"
                    },
                    {
                        Name: "M64s",
                        Description: CalculatorConst.M64sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "65.31"
                    },
                    {
                        Name: "M128s",
                        Description: CalculatorConst.M128sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "130.63"
                    },
                    {
                        Name: "M32ts",
                        Description: CalculatorConst.M32tsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.34"
                    }]
                },
                {
                    Name: "Ev3 系列 / ESv3 系列",
                    Description: "Ev3 系列 / ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E2 v3/E2s v3",
                        Description: "2个内核，16GiB RAM，50GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.07"
                    },
                    {
                        Name: "E4 v3/E4s v3",
                        Description: "4个内核，32GiB RAM，100GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.15"
                    },
                    {
                        Name: "E8 v3/E8s v3",
                        Description: "8个内核，64GiB RAM，200GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.3"
                    },
                    {
                        Name: "E16 v3/E16s v3",
                        Description: "16个内核，128GiB RAM，400GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.61"
                    }]
                },
                {
                    Name: "Ev3 系列/ESv3 系列",
                    Description: "Ev3 系列 / ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E20 v3/ES20 v3",
                        Description: "20个内核，160GiB RAM，500GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.5"
                    },
                    {
                        Name: "E32 v3/E32s v3",
                        Description: "32个内核，256GiB RAM，800GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.21"
                    }]
                },
                {
                    Name: "Ev3 系列/ ESv3 系列",
                    Description: "Ev3 系列 / ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E64 v3/E64is v3",
                        Description: "64个内核，432GiB RAM，1,600GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.41"
                    },
                    {
                        Name: "E64 v3/E64s v3",
                        Description: "64个内核，432GiB RAM，1,600GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.41"
                    }]
                },
                {
                    Name: "Dv2系列/DSv2系列",
                    Description: "Dv2系列/DSv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D1 v2/DS1 v2",
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.49"
                    },
                    {
                        Name: "D2 v2/DS2 v2",
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.02"
                    },
                    {
                        Name: "D3 v2/DS3 v2",
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.04"
                    },
                    {
                        Name: "D4 v2/DS4 v2",
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.1"
                    }]
                },
                {
                    Name: "Dv2 系列 / DSv2 系列",
                    Description: "Dv2 系列 / DSv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [
                        {
                            Name: "D5 v2/DS5 v2",
                            Description: CalculatorConst.D5V2SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "8.17"
                        },
                        {
                            Name: "D11 v2/DS11 v2",
                            Description: CalculatorConst.D11V2SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "1.73"
                        },
                        {
                            Name: "D12 v2/DS12 v2",
                            Description: CalculatorConst.D12V2SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "3.46"
                        }]
                },
                {
                    Name: "Dv2系列 /DSv2系列 ",
                    Description: "Dv2系列/DSv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D13 v2/DS13 v2",
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.92"
                    },
                    {
                        Name: "D14 v2/DS14 v2",
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.83"
                    },
                    {
                        Name: "D15 v2/DS15 v2",
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29"
                    }]
                },
                {
                    Name: "Fv2系列/FSv2系列",
                    Description: "Fv2系列/FSv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F2 v2/FS2 v2",
                        Description: "2 vCPU，4 GiB RAM，16 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.083"
                    },
                    {
                        Name: "F4 v2/FS4 v2",
                        Description: "4 vCPU，8 GiB RAM，32 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.166"
                    },
                    {
                        Name: "F8 v2/FS8 v2",
                        Description: "8 vCPU，16 GiB RAM，64 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.332"
                    }]
                },
                {
                    Name: "Fv2系列 / FSv2系列",
                    Description: "Fv2系列/FSv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F16 v2/FS16 v2",
                        Description: "16 vCPU，32 GiB RAM，128 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.664"
                    },
                    {
                        Name: "F32 v2/FS32 v2",
                        Description: "32 vCPU，64 GiB RAM，256 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.328"
                    }]
                },
                {
                    Name: "Fv2 系列/FSv2 系列",
                    Description: "Fv2 系列/FSv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F64 v2/FS64 v2",
                        Description: "64 vCPU，128 GiB RAM，512 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.656"
                    },
                    {
                        Name: "F72 v2/FS72 v2",
                        Description: "72 vCPU，144 GiB RAM，576 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "69.312"
                    }]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.43"
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.9"
                    },
                    {
                        Name: "F4",
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8"
                    },
                    {
                        Name: "F8",
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.61"
                    },
                    {
                        Name: "F16",
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.19"
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.43"
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.9"
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8"
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.61"
                    },
                    {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.19"
                    }]
                },
                {
                    Name: "NCsv3 系列",
                    Description: "NCsv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "NC6s v3",
                        Description: "6 个核心，112 GiB RAM，336 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.35"
                    },
                    {
                        Name: "NC12s v3",
                        Description: "12 个核心，224 GiB RAM，672 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "46.71"
                    },
                    {
                        Name: "NC24s v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "93.42"
                    },
                    {
                        Name: "NC24rs v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "102.76"
                    }]
                }]
            }]
        },
        "sql-server-standard": {
            Name: "虚拟机 - SQL Server For Windows",
            Types: [{
                Name: "Web 版",
                Features: [
                    {
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.3135",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5135",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.0235",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8435",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.687",
                    }]
                },
                {
                    Name: "A 系列 - 标准",
                    Description: "A 系列 - 标准",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.3335",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5635",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.1435",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.0835",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.167",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9113",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.6335",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.257",
                    }]
                },
                {
                    Name: "B 系列/BS 系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B1/B1S",
                        Description: "1个内核，1GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.3735",
                    },
                    {
                        Name: "B2/B2S",
                        Description: "2个内核，4GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.8635",
                    },
                    {
                        Name: "B1M/B1MS",
                        Description: "1个内核，2GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.4835"
                    }]
                },
                {
                    Name: "B系列 / BS系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B2M/B2MS",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.3235"
                    },
                    {
                        Name: "B4M/B4MS",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4335"
                    },
                    {
                        Name: "B8M/B8MS",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.867"
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.744",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.2845",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.3655",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.7425",
                    }]
                },
                {
                    Name: "",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.170",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.1429",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.2854",
                    }]
                },
                {
                    Name: "Dv3 系列/DSv3 系列",
                    Description: "Dv3 系列/DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D2 v3/DS2 v3",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.4535"
                    },
                    {
                        Name: "D4 v3/DS4 v3",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.7235"
                    },
                    {
                        Name: "D8 v3/DS8 v3",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.447"
                    }]
                },
                {
                    Name: "Dv3 系列 / DSv3 系列",
                    Description: "Dv3 系列/DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D16 v3/DS16 v3",
                        Description: "16个内核，64GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.894"
                    },
                    {
                        Name: "D32 v3/DS32 v3",
                        Description: "32个内核，128GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "21.95"
                    },
                    {
                        Name: "D64 v3/DS64 v3",
                        Description: "64个内核，256GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "43.9"
                    }]
                },
                {
                    Name: "D 系列",
                    Description: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.7",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.22",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.23",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.5",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.92",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.63",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.28",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.56",
                    }]
                },
                {
                    Name: "Dv2系列 /DSv2 系列",
                    Description: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.73",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.31",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.42",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.86",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.37",
                    }]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.66",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.17",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.15",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.32",
                    }
                        , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.34",
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.66",
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.17",
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.15",
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.32",
                    }
                        , {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.34",
                    }]
                },
                {
                    Name: "M 系列 ",
                    Description: "M 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "M32ls",
                        Description: CalculatorConst.M32lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.82"
                    },
                    {
                        Name: "M64ls",
                        Description: CalculatorConst.M64lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "66.93"
                    },
                    {
                        Name: "M8ms",
                        Description: CalculatorConst.M8msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.827"
                    },
                    {
                        Name: "M16ms",
                        Description: CalculatorConst.M16msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "35.544"
                    },
                    {
                        Name: "M32ms",
                        Description: CalculatorConst.M32msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "71.36"
                    },
                    {
                        Name: "M64ms",
                        Description: CalculatorConst.M64msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "123.54"
                    },
                    {
                        Name: "M128ms",
                        Description: CalculatorConst.M128msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "305.91"
                    },
                    {
                        Name: "M64s",
                        Description: CalculatorConst.M64sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "87.63"
                    },
                    {
                        Name: "M128s",
                        Description: CalculatorConst.M128sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "175.28"
                    },
                    {
                        Name: "M32ts",
                        Description: CalculatorConst.M32tsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "33.51"
                    }]
                },
                {
                    Name: "Ev3 系列/ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E2 v3/E2s v3",
                        Description: "2个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8"
                    },
                    {
                        Name: "E4 v3/E4s v3",
                        Description: "4个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.41"
                    },
                    {
                        Name: "E8 v3/E8s v3",
                        Description: "8个内核，64GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.82"
                    },
                    {
                        Name: "E16 v3/E16s v3",
                        Description: "16个内核，128GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.65"
                    }]
                },
                {
                    Name: "Ev3 系列 / ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E32 v3/E32s v3",
                        Description: "32个内核，256GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.46"
                    },
                    {
                        Name: "E64i v3/E64is v3",
                        Description: "64个内核，432GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "54.93"
                    },
                    {
                        Name: "E64 v3/E64s v3",
                        Description: "64个内核，432GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "54.93"
                    }]
                },
                {
                    Name: "Dv2 系列/DS v2 系列",
                    Description: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.08",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.96",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.92",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.84",
                    }
                        , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "19.81",
                    }
                    ]
                },
                
                {
                    Name: "NCsv3 系列",
                    Description: "NCsv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "NC6s v3",
                        Description: "6 个核心，112 GiB RAM，336 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26.5"
                    },
                    {
                        Name: "NC12s v3",
                        Description: "12 个核心，224 GiB RAM，672 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "52.99"
                    },
                    {
                        Name: "NC24s v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "106"
                    },
                    {
                        Name: "NC24rs v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "116.46"
                    }]
                }]
            },
            {
                Name: "标准版",
                Features: [
                    {
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.654",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.854",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.364",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.184",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.368",
                    }]
                },
                {
                    Name: "A 系列 - 标准",
                    Description: "A 系列 - 标准",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.674",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.904",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.484",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.424",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.848",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.254",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.974",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.938",
                    }]
                },
                {
                    Name: "B 系列/BS 系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B1/B1S",
                        Description: "1个内核，1GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.714",
                    },
                    {
                        Name: "B2/B2S",
                        Description: "2个内核，4GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.204",
                    },
                    {
                        Name: "B1M/B1MS",
                        Description: "1个内核，2GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.824"
                    }]
                },
                {
                    Name: "B系列 / BS系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B2M/B2MS",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.664"
                    },
                    {
                        Name: "B4M/B4MS",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.774"
                    },
                    {
                        Name: "B8M/B8MS",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.548"
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.0845",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.625",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.706",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.4235",
                    }]
                },
                {
                    Name: "",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.5105",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.4834",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.9655",
                    }]
                },
                {
                    Name: "Dv3 系列/DSv3 系列",
                    Description: "Dv3 系列/DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D2 v3/DS2 v3",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.794"
                    },
                    {
                        Name: "D4 v3/DS4 v3",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.064"
                    },
                    {
                        Name: "D8 v3/DS8 v3",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.128"
                    }]
                },
                {
                    Name: "Dv3 系列 / DSv3 系列",
                    Description: "Dv3 系列/DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D16 v3/DS16 v3",
                        Description: "16个内核，64GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "20.256"
                    },
                    {
                        Name: "D32 v3/DS32 v3",
                        Description: "32个内核，128GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40.502"
                    },
                    {
                        Name: "D64 v3/DS64 v3",
                        Description: "64个内核，256GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "84.38"
                    }]
                },
                {
                    Name: "D 系列",
                    Description: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.24",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.77",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.56",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.46",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.17",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.34",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.69",
                    }]
                },
                {
                    Name: "Dv2/Dsv2 系列",
                    Description: "D1-5 v2系列/ Ds1-5 v2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.07",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.65",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.76",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.54",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.74",
                    }]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.36",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.49",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9",
                    }
                        , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.71",
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3",
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.36",
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.49",
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9",
                    }
                        , {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.71",
                    }]
                },
                {
                    Name: "M 系列 ",
                    Description: "M 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "M32ls",
                        Description: CalculatorConst.M32lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "53.372"
                    },
                    {
                        Name: "M64ls",
                        Description: CalculatorConst.M64lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "107.41"
                    },
                    {
                        Name: "M8ms",
                        Description: CalculatorConst.M8msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.508"
                    },
                    {
                        Name: "M16ms",
                        Description: CalculatorConst.M16msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "44.906"
                    },
                    {
                        Name: "M32ms",
                        Description: CalculatorConst.M32msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "89.912"
                    },
                    {
                        Name: "M64ms",
                        Description: CalculatorConst.M64msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "164.02"
                    },
                    {
                        Name: "M128ms",
                        Description: CalculatorConst.M128msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "386.87"
                    },
                    {
                        Name: "M64s",
                        Description: CalculatorConst.M64sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "128.11"
                    },
                    {
                        Name: "M128s",
                        Description: CalculatorConst.M128sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "256.24"
                    },
                    {
                        Name: "M32ts",
                        Description: CalculatorConst.M32tsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "52.062"
                    }]
                },
                {
                    Name: "Ev3 系列/ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E2 v3/E2s v3",
                        Description: "2个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.14"
                    },
                    {
                        Name: "E4 v3/E4s v3",
                        Description: "4个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.75"
                    },
                    {
                        Name: "E8 v3/E8s v3",
                        Description: "8个内核，64GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.5"
                    },
                    {
                        Name: "E16 v3/E16s v3",
                        Description: "16个内核，128GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.02"
                    }]
                },
                {
                    Name: "Ev3 系列 / ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E32 v3/E32s v3",
                        Description: "32个内核，256GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "46.012"
                    },
                    {
                        Name: "E64i v3/E64is v3",
                        Description: "64个内核，432GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "95.41"
                    },
                    {
                        Name: "E64 v3/E64s v3",
                        Description: "64个内核，432GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "95.41"
                    }]
                },
                
                {
                    Name: "Dv2 / Dsv2 系列",
                    Description: "D11-15 v2系列/Ds11-15 v2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.42",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.30",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.6",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.21",
                    }
                        , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "31.51",
                    }
                    ]
                },
                {
                    Name: "NCsv3 系列",
                    Description: "NCsv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "NC6s v3",
                        Description: "6 个核心，112 GiB RAM，336 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "30.29"
                    },
                    {
                        Name: "NC12s v3",
                        Description: "12 个核心，224 GiB RAM，672 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "60.59"
                    },
                    {
                        Name: "NC24s v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "121.18"
                    },
                    {
                        Name: "NC24rs v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "131.64"
                    }]
                }]
            },
            {
                Name: "企业版",
                Features: [{
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [
                        {
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.65",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.85",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.36",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.18",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.36",
                    }]
                },
                {
                    Name: "A 系列 - 标准",
                    Description: "A 系列 - 标准",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.67",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.9",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.48",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.42",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.84",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.25",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.97",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.93",
                    }]
                },
                {
                    Name: "B 系列/BS 系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B1/B1S",
                        Description: "1个内核，1GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.71",
                    },
                    {
                        Name: "B2/B2S",
                        Description: "2个内核，4GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.2",
                    },
                    {
                        Name: "B1M/B1MS",
                        Description: "1个内核，2GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.82"
                    }]
                },
                {
                    Name: "B系列 / BS系列",
                    Description: "B 系列/BS 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B2M/B2MS",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.66"
                    },
                    {
                        Name: "B4M/B4MS",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.77"
                    },
                    {
                        Name: "B8M/B8MS",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.54"
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.0805",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.621",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.702",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.4155",
                    }]
                },
                {
                    Name: "",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.5065",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.4794",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26.9575",
                    }]
                },
                {
                    Name: "Dv3 系列/DSv3 系列",
                    Description: "Dv3 系列/DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D2 v3/DS2 v3",
                        Description: "2个内核，8GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.79"
                    },
                    {
                        Name: "D4 v3/DS4 v3",
                        Description: "4个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.06"
                    },
                    {
                        Name: "D8 v3/DS8 v3",
                        Description: "8个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.12"
                    }]
                },
                {
                    Name: "Dv3 系列 / DSv3 系列",
                    Description: "Dv3 系列/DSv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D16 v3/DS16 v3",
                        Description: "16个内核，64GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "48.24"
                    },
                    {
                        Name: "D32 v3/DS32 v3",
                        Description: "32个内核，128GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "96.47"
                    },
                    {
                        Name: "D64 v3/DS64 v3",
                        Description: "64个内核，256GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "192.94"
                    }]
                },
                {
                    Name: "D 系列",
                    Description: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.91",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.43",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.44",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.9",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.13",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.84",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.68",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "55.37",
                    }]
                },
                {
                    Name: "Dv2 /Dsv2系列",
                    Description: "D1-5 v2系列/Ds1-5 v2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.07",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.65",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.76",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.53",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "46.72",
                    }]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.51",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.49",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.99",
                    }
                        , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45.69",
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10",
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.51",
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.49",
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.99",
                    }
                        , {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45.69",
                    }]
                },
                {
                    Name: "M 系列 ",
                    Description: "M 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "M32ls",
                        Description: CalculatorConst.M32lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "109.34"
                    },
                    {
                        Name: "M64ls",
                        Description: CalculatorConst.M64lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "215.97"
                    },
                    {
                        Name: "M8ms",
                        Description: CalculatorConst.M8msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "36.5"
                    },
                    {
                        Name: "M16ms",
                        Description: CalculatorConst.M16msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "72.89"
                    },
                    {
                        Name: "M32ms",
                        Description: CalculatorConst.M32msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "145.88"
                    },
                    {
                        Name: "M64ms",
                        Description: CalculatorConst.M64msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "272.58"
                    },
                    {
                        Name: "M128ms",
                        Description: CalculatorConst.M128msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "603.99"
                    },
                    {
                        Name: "M64s",
                        Description: CalculatorConst.M64sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "236.67"
                    },
                    {
                        Name: "M128s",
                        Description: CalculatorConst.M128sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "473.36"
                    },
                    {
                        Name: "M32ts",
                        Description: CalculatorConst.M32tsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "108.03"
                    }]
                },
                {
                    Name: "Ev3 系列/ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E2 v3/E2s v3",
                        Description: "2个内核，16GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.14"
                    },
                    {
                        Name: "E4 v3/E4s v3",
                        Description: "4个内核，32GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.75"
                    },
                    {
                        Name: "E8 v3/E8s v3",
                        Description: "8个内核，64GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.49"
                    },
                    {
                        Name: "E16 v3/E16s v3",
                        Description: "16个内核，128GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "51"
                    }]
                },
                {
                    Name: "Ev3 系列 / ESv3 系列",
                    Description: "Ev3 系列/ESv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E32 v3/E32s v3",
                        Description: "32个内核，256GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "101.98"
                    },
                    {
                        Name: "E64i v3/E64is v3",
                        Description: "64个内核，432GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "203.97"
                    },
                    {
                        Name: "E64 v3/E64s v3",
                        Description: "64个内核，432GiB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "203.97"
                    }]
                },
                {
                    Name: "Dv2 系列 /Dsv2 系列",
                    Description: "D11-15 v2系列Ds11-15 v2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.42",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.30",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26.59",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "53.19",
                    }
                        , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "66.49",
                    }
                    ]
                },
                {
                    Name: "NCsv3 系列",
                    Description: "NCsv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "NC6s v3",
                        Description: "6 个核心，112 GiB RAM，336 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "41.80"
                    },
                    {
                        Name: "NC12s v3",
                        Description: "12 个核心，224 GiB RAM，672 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "83.6"
                    },
                    {
                        Name: "NC24s v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "167.2"
                    },
                    {
                        Name: "NC24rs v3",
                        Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "177.66"
                    }]
                }]
            }]
        },
        "virtual-machines-sql-server-ubuntu-linux": {
            Name: "虚拟机 - SQL Server Ubuntu Linux",
            Types: [{
                Name: "Web 版",
                Features: [
                    {
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.3135",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.4535",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.8635",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.5135",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.027",
                    }]
                },
                {
                    Name: "A 系列 - 标准",
                    Description: "A 系列 - 标准",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.3335",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.49352",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.95352",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.71352",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.417",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8235",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.4535",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.897",
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6405",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.066",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.94",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.868",
                    }]
                },
                {
                    Name: "",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.0665",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9373",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8705",
                    }]
                },
                {
                    Name: "D 系列",
                    Description: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6435",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.1235",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.0535",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.137",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7735",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.3435",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.697",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.394",
                    }]
                },
                {
                    Name: "D1-5 v2系列 /Ds1-5 v2系列",
                    Description: "D v2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6935",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.2235",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.2435",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.507",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.984",
                    }]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6335",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.1035",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.003",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.017",
                    }
                        , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.004",
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6335",
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.1035",
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.0035",
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.0170",
                    }
                        , {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.004",
                    }]
                },
                {
                    Name: "Dv2 系列 / Dsv2 系列",
                    Description: "D11-15 v2系列/Ds11-15 v2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9335",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.6635",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.327",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.644",
                    }, 
                    {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.3076",
                    }
                    ]
                },
                {
                    Name: "M 系列",
                    Description: "M 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "M32ls",
                        Description: CalculatorConst.M32lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.288"
                    },
                    {
                        Name: "M64ls",
                        Description: CalculatorConst.M64lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "47.856"
                    },
                    {
                        Name: "M8ms",
                        Description: CalculatorConst.M8msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.477"
                    },
                    {
                        Name: "M16ms",
                        Description: CalculatorConst.M16msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "31.314"
                    },
                    {
                        Name: "M32ms",
                        Description: CalculatorConst.M32msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "61.828"
                    },
                    {
                        Name: "M64ms",
                        Description: CalculatorConst.M64msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "104.476"
                    },
                    {
                        Name: "M128ms",
                        Description: CalculatorConst.M128msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "267.772"
                    },
                    {
                        Name: "M64s",
                        Description: CalculatorConst.M64sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "68.566"
                    },
                    {
                        Name: "M128s",
                        Description: CalculatorConst.M128sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "137.142"
                    },
                    {
                        Name: "M32ts",
                        Description: CalculatorConst.M32tsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.968"
                    }]
                },
            ]
            },
            {
                Name: "标准版",
                Features: [
                    {
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.654",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.794",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.204",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.854",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.708",
                    }]
                },
                {
                    Name: "A 系列 - 标准",
                    Description: "A 系列 - 标准",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.674",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.834",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.294",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.054",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.098",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.164",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.794",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.578",
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.981",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.4065",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.2805",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.5495",
                    }]
                },
                {
                    Name: "",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.407",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.2778",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.5515",
                    }]
                },
                {
                    Name: "D 系列",
                    Description: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.984",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.464",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.394",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.818",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.114",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.684",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.378",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.756",
                    }]
                },
                {
                    Name: "Dv2 系列 /Dsv2 系列",
                    Description: "D1-5 v2系列/Ds1-5 v2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.034",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.564",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.584",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.188",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.346",
                    }]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.974",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.444",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.344",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.698",
                    }
                        , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.366",
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.974",
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.444",
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.344",
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.698",
                    }
                        , {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.366",
                    }]
                },
                {
                    Name: "Dv2 系列 / Dsv2 系列",
                    Description: "D11-15 2v系列/Ds11-15 2v系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.274",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.004",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.008",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.006",
                    }
                        , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "30.01",
                    }
                    ]
                },
                {
                    Name: "M 系列",
                    Description: "M 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "M32ls",
                        Description: CalculatorConst.M32lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "44.012"
                    },
                    {
                        Name: "M64ls",
                        Description: CalculatorConst.M64lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "85.304"
                    },
                    {
                        Name: "M8ms",
                        Description: CalculatorConst.M8msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "20.158"
                    },
                    {
                        Name: "M16ms",
                        Description: CalculatorConst.M16msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40.676"
                    },
                    {
                        Name: "M32ms",
                        Description: CalculatorConst.M32msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "80.552"
                    },
                    {
                        Name: "M64ms",
                        Description: CalculatorConst.M64msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "141.924"
                    },
                    {
                        Name: "M128ms",
                        Description: CalculatorConst.M128msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "342.668"
                    },
                    {
                        Name: "M64s",
                        Description: CalculatorConst.M64sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "106.014"
                    },
                    {
                        Name: "M128s",
                        Description: CalculatorConst.M128sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "212.038"
                    },
                    {
                        Name: "M32ts",
                        Description: CalculatorConst.M32tsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "42.692"
                    }]
                },
            ]
            },
            {
                Name: "企业版",
                Features: [
                    {
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.65",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.79",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.2",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.85",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "21.7",
                    }]
                },
                {
                    Name: "A 系列 - 标准",
                    Description: "A 系列 - 标准",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.67",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.83",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.29",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.05",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.09",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.06",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.79",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.57",
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.977",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.4025",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2765",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.5415",
                    }]
                },
                {
                    Name: "",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.403",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.2738",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26.5435",
                    }]
                },
                {
                    Name: "D 系列",
                    Description: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.98",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.46",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.39",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.81",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.11",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.68",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.37",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "50.74",
                    }]
                },
                {
                    Name: "Dv2 系列/Dsv2 系列",
                    Description: "D1-5 v2系列/Ds 1-5v2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.03",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.56",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.58",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.18",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "46.33",
                    }]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.97",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.44",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.34",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.69",
                    }
                        , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45.35",
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.97",
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.44",
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.34",
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.69",
                    }
                        , {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45.35",
                    }]
                },
                {
                    Name: "Dv2 系列 / Dv2 系列",
                    Description: "D11-15 2v系列/Ds11-15 2v系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.27",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "51.99",
                    }
                        , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "64.99",
                    }
                    ]
                },
                {
                    Name: "M 系列",
                    Description: "M 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "M32ls",
                        Description: CalculatorConst.M32lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "99.98"
                    },
                    {
                        Name: "M64ls",
                        Description: CalculatorConst.M64lsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "197.24"
                    },
                    {
                        Name: "M8ms",
                        Description: CalculatorConst.M8msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.15"
                    },
                    {
                        Name: "M16ms",
                        Description: CalculatorConst.M16msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "68.66"
                    },
                    {
                        Name: "M32ms",
                        Description: CalculatorConst.M32msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "136.52"
                    },
                    {
                        Name: "M64ms",
                        Description: CalculatorConst.M64msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "253.86"
                    },
                    {
                        Name: "M128ms",
                        Description: CalculatorConst.M128msSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "566.54"
                    },
                    {
                        Name: "M64s",
                        Description: CalculatorConst.M64sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "217.95"
                    },
                    {
                        Name: "M128s",
                        Description: CalculatorConst.M128sSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "435.91"
                    },
                    {
                        Name: "M32ts",
                        Description: CalculatorConst.M32tsSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "98.66"
                    }]
                },
            ]
            }]
        },
        "virtual-machines-ml-server": {
            Name: "虚拟机 - Machine Learning Server",
            Types: [{
                Name: "企业版",
                Features: [{
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.54",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.68",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.09",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.74",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.47",
                    }]
                },
                {
                    Name: "A 系列 - 标准",
                    Description: "A 系列 - 标准",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.56",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.72",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.18",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.94",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.86",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.05",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.68",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.34",
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GiB RAM，10GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.867",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2925",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.1665",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.3115",
                    }]
                },
                {
                    Name: "",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GiB RAM，20GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.293",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.1638",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "28.3135",
                    }]
                },
                {
                    Name: "D 系列",
                    Description: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.87",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.35",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.28",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.58",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.57",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.14",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "54.28",
                    }]
                },
                {
                    Name: " ",
                    Description: "D 2v系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.92",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.45",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.95",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "49.87",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    Description: "D 2v系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.16",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.89",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.77",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "55.53",
                    }
                        , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "84.8173",
                    }
                    ]
                },
                {
                    Name: "F 系列",
                    Description: "F 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1Size,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.86",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.33",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.23",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.46",
                    }
                        , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "48.89",
                    }]
                },
                {
                    Name: "Fs 系列",
                    Description: "Fs 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.F1sSize,
                        Description: CalculatorConst.F1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.86",
                    },
                    {
                        Name: CalculatorConst.F2sSize,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.33",
                    },
                    {
                        Name: CalculatorConst.F4sSize,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.23",
                    },
                    {
                        Name: CalculatorConst.F8sSize,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.46",
                    }
                        , {
                        Name: CalculatorConst.F16sSize,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "48.89",
                    }]
                }
            ]
            }]
        },

        "cloud-services": {
            Name: "云服务",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "A 系列",
                    Description: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "超小型虚拟机 (1个（共用）内核、0.75 GB RAM、20GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.11",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "小型虚拟机 (1个内核、1.75GB RAM、225GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.36",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "中型虚拟机 (2个内核、3.5GB RAM、490GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.94",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "大型虚拟机(4个内核，7GB RAM，1000GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.88",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "超大型虚拟机(8个内核，14GB RAM，2040GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "内存密集型虚拟机 (2个内核 CPU、14GB RAM、490GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.71",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "内存密集型虚拟机 (4个内核, 28GB RAM,1000 GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "内存密集型虚拟机 (8个内核、56GB RAM、2,040GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "Av2 系列",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A1v2Size,
                        Description: "1个内核，2GB RAM，10GB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5405",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GB RAM，20GB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.0833",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GB RAM，40GB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.1666",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GB RAM，80GB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.3333",
                    }]
                },
                {
                    Name: "",
                    Description: "Av2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A2mv2Size,
                        Description: "2个内核，16GB RAM，20GB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9697",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GB RAM，40GB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9394",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GB RAM，80GB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8787",
                    }]
                },
                 {
                     Name: "D系列",
                     Description: "D系列",
                     PricePeriod: PricePeriodEnum.Hourly,
                     PriceUnit: "个",
                     MinUnit: "0",
                     MaxUnit: "100",
                     Sizes: [{
                         Name: CalculatorConst.D1Size,
                         Description: CalculatorConst.D1SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "0.48",
                     },
                     {
                         Name: CalculatorConst.D2Size,
                         Description: CalculatorConst.D2SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "1",
                     },
                     {
                         Name: CalculatorConst.D3Size,
                         Description: CalculatorConst.D3SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "2.01",
                     },
                     {
                         Name: CalculatorConst.D4Size,
                         Description: CalculatorConst.D4SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "4.05",
                     },
                     {
                         Name: CalculatorConst.D11Size,
                         Description: CalculatorConst.D11SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "1.7",
                     },
                     {
                         Name: CalculatorConst.D12Size,
                         Description: CalculatorConst.D12SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "3.41",
                     },
                     {
                         Name: CalculatorConst.D13Size,
                         Description: CalculatorConst.D13SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "6.83",
                     },
                     {
                         Name: CalculatorConst.D14Size,
                         Description: CalculatorConst.D14SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "13.67",
                     }]
                 },
                 {
                    Name: "Dv3 系列",
                    Description: "Dv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D2 v3",
                        Description: "2个 vCPU，8GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.25"
                    },
                    {
                        Name: "D4 v3",
                        Description: "4个 vCPU，16GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.52"
                    },
                    {
                        Name: "D8 v3",
                        Description: "8个 vCPU，32GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.04"
                    }]
                },
                {
                    Name: "Dv3系列 ",
                    Description: "Dv3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "D16 v3",
                        Description: "16个 vCPU，64GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.08"
                    },
                    {
                        Name: "D32 v3",
                        Description: "32个 vCPU，128GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "20.15"
                    },
                    {
                        Name: "D64 v3",
                        Description: "64个 vCPU，256GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40.3"
                    }]
                },
                 {
                     Name: " ",
                     Description: "D 2v系列",
                     PricePeriod: PricePeriodEnum.Hourly,
                     PriceUnit: "台",
                     MinUnit: "0",
                     MaxUnit: "100",
                     Sizes: [{
                         Name: CalculatorConst.D1V2Size,
                         Description: CalculatorConst.D1V2SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "0.53",
                     },
                     {
                         Name: CalculatorConst.D2V2Size,
                         Description: CalculatorConst.D2V2SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "1.11",
                     },
                     {
                         Name: CalculatorConst.D3V2Size,
                         Description: CalculatorConst.D3V2SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "2.22",
                     },
                     {
                         Name: CalculatorConst.D4V2Size,
                         Description: CalculatorConst.D4V2SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "4.45",
                     },
                     {
                         Name: CalculatorConst.D5V2Size,
                         Description: CalculatorConst.D5V2SizeDesc,
                         PriceTier: PriceTierEnum.Fixed,
                         PricePerTier: "8.56",
                     }]
                 },
                {
                    Name: "Dv2 系列",
                    Description: "D 2v系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.88"
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76"
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.51"
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.03"
                    },
                    {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.79"
                    }]
                },
                {
                    Name: "Ev3 系列",
                    Description: "Ev3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E2 v3",
                        Description: "2个 vCPU，16GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.6"
                    },
                    {
                        Name: "E4 v3",
                        Description: "4个 vCPU，32GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.21"
                    },
                    {
                        Name: "E8 v3",
                        Description: "8个 vCPU，64GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.41"
                    },
                    {
                        Name: "E16 v3",
                        Description: "16个 vCPU，128GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.84"
                    }]
                },
                {
                    Name: "Ev3系列 ",
                    Description: "Ev3 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E32 v3",
                        Description: "32个 vCPU，256GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.66"
                    },
                    {
                        Name: "E64i v3",
                        Description: "64个 vCPU，432GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "51.33"
                    },
                    {
                        Name: "E64 v3",
                        Description: "64个 vCPU，432GB RAM",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "51.33"
                    }]
                },
                {
                    Name: "Fv2系列",
                    Description: "Fv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F2 v2",
                        Description: "2 vCPU，4 GiB RAM，16 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.166"
                    },
                    {
                        Name: "F4 v2",
                        Description: "4 vCPU，8 GiB RAM，32 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.332"
                    },
                    {
                        Name: "F8 v2",
                        Description: "8 vCPU，16 GiB RAM，64GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.664"
                    },
                    {
                        Name: "F16 v2",
                        Description: "16 vCPU，32 GiB RAM，128 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.328"
                    }]
                },
                {
                    Name: "Fv2 系列",
                    Description: "Fv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F32 v2",
                        Description: "32 vCPU，64 GiB RAM，256 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.656"
                    },
                    {
                        Name: "F64 v2",
                        Description: "64 vCPU，128 GiB RAM，512 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "69.312"
                    },
                    {
                        Name: "F72 v2",
                        Description: "72 vCPU，144 GiB RAM，576 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "138.624"
                    }]
                }]
            }]
        },
        "storage-general-purpose-gpv2-cool-block-blob-early-delete": {
            Name: "存储 - 块 Blob - 常规用途 v2 - “冷”和“存档”提前删除",
            Types: [{
                Name: "LRS",
                Features: [
                    {
                    Name: "冷",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,512000",
                        PricePerTier: "0.1018",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "Archive",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,512000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "ZRS",
                Features: [{
                    Name: "冷",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,512000",
                        PricePerTier: "0.2035",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                },{
                    Name: "Archive",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,512000",
                        PricePerTier: "0.0301",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "冷",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,512000",
                        PricePerTier: "0.2544",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                },{
                    Name: "Archive",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,512000",
                        PricePerTier: "0.2544",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-general-purpose-v2-cold-hot-block-blob": {
            Name: "存储 - 块 Blob - 常规用途 v2 - “热”和“冷”访问层 - 数据存储价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "块 blob（冷）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.11",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "块 blob（热）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,102400,102401,1024000,1024001,5120000",
                        PricePerTier: "0.149,0.1438,0.1436",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },{
                    Name: "Archive",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: " GRS",
                Features: [{
                    Name: "块 blob（冷）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.22",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "块 blob（热）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,102400,102401,1024000,1024001,5120000",
                        PricePerTier: "0.298,0.2876,0.2872",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },{
                    Name: "Archive",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.0301",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "块 blob（冷）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.279",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "块 blob（热）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,102400,102401,1024000,1024001,1024000",
                        PricePerTier: "0.378,0.3648,0.3643",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },{
                    Name: "Archive",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024000",
                        PricePerTier: "0.0301",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-general-purpose-v2-block-blob-access": {
            Name: "存储 - 块 Blob - 常规用途 v2 - “热”和“冷”访问层 - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [
                    {
                        Name: "写操作(冷)",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,5000",
                            PricePerTier: "0.09",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "10000 个"
                        }]
                    },
                    {
                        Name: "写操作(热)",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,5000",
                            PricePerTier: "0.045",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "10000 个"
                        }]
                    },
                    {
                        Name: "写操作(Archive)",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,5000",
                            PricePerTier: "0.712",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "10000 个"
                        }]
                    },
                    {
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "数据检索 (冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0657",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },{
                    Name: "数据检索 (Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.127",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS 和 RA-GRS",
                Features: [
                    {
                        Name: "写操作(冷)",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,5000",
                            PricePerTier: "0.18",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "10000 个"
                        }]
                    },
                    {
                        Name: "写操作(热)",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,5000",
                            PricePerTier: "0.09",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "10000 个"
                        }]
                    },
                    {
                        Name: "写操作(Archive)",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,5000",
                            PricePerTier: "1.424",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "10000 个"
                        }]
                    },
                {
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.09",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.09",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.09",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "31.825",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "31.825",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "数据检索 (冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0657",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "数据检索 (Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.127",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "异地复制数据传输 (冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.67",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "异地复制数据传输 (热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.67",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "异地复制数据传输 (Archive)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.67",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-cold-hot-block-blob": {
            Name: "存储 - Blob 存储 - “热”和“冷”访问层 - 数据存储价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "块 blob（冷）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.11",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "块 blob（热）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,102400,102401,1024000,1024001,5120000",
                        PricePerTier: "0.149,0.1438,0.1436",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: " GRS",
                Features: [{
                    Name: "块 blob（冷）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.22",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "块 blob（热）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,102400,102401,1024000,1024001,5120000",
                        PricePerTier: "0.298,0.2876,0.2872",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "块 blob（冷）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.279",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "块 blob（热）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,102400,102401,1024000,1024001,1024000",
                        PricePerTier: "0.378,0.3648,0.3643",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-cold-hot-block-blob-access": {
            Name: "存储 - Blob 存储 - “热”和“冷”访问层 - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.09",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "数据检索 (冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0657",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "数据写入 (冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0164",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS 和 RA-GRS",
                Features: [{
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.18",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "放置 Blob/块、列出并创建容器操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.09",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.03",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）(热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "数据检索 (冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0657",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "数据写入 (冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0328",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "异地复制数据传输 (冷)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.67",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "异地复制数据传输 (热)",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.67",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-general-purpose-block-blob": {
            Name: "存储 - 块 blob - 常规用途 v1 - 数据存储价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "块 blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.41,0.37,0.33",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "ZRS",
                Features: [{
                    Name: "块 blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.64,0.54,0.5",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "块 blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.82,0.74,0.66",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "块 blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "1.04,0.94,0.83",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-general-purpose-block-blob-access": {
            Name: "存储 - 块 Blob - 常规用途 v1 - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出并创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "所有其他操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "ZRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出并创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "所有其他操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.09",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出并创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "所有其他操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }, {
                Name: "RA-GRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.09",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出并创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.045",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "所有其他操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.015",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },
        "storage-general-purpose-file": {
            Name: "存储 - 常规用途存储账户 - 文件 - 数据存储价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "Azure file/文件",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "1.4",
                        MinUnit: "0",
                        MaxUnit: "20000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "Azure file/文件",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "1.75",
                        MinUnit: "0",
                        MaxUnit: "20000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "storage-general-purpose-file-access": {
            Name: "存储 - 常规用途存储账户 - 文件 - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "放置文件、创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.10",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.10",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.01",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "文件协议操作 （按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.01",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "放置文件、创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.20",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.10",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.01",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "文件协议操作 （按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.01",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },
        "premium-storage": {
            Name: "存储 - 高级存储",
            Types: [{
                Name: "P10",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 128GB，磁盘读写 (IOPS)500，磁盘吞吐 100MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "132.15",
                    }]
                }]
            },
            {
                Name: "P20",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 512GB，磁盘读写 (IOPS)2300，磁盘吞吐 150MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "490.93",
                    }]
                }]
            },
            {
                Name: "P30",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 1024GB，磁盘读写 (IOPS)5000，磁盘吞吐 200MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "906.29",
                    }]
                }]
            }]
        },
        "storage-manager-disk-gpv1-premium": {
            Name: "存储 - 高级托管磁盘 - 常规用途 v1",
            Types: [{
                Name: "P4",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 32GB，磁盘读写 (IOPS)120，磁盘吞吐 25MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "47.53",
                    }]
                }]
            },
            {
                Name: "P6",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 64GB，磁盘读写 (IOPS)240，磁盘吞吐 50MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "91.9",
                    }]
                }]
            },
            {
                Name: "P10",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 128GB，磁盘读写 (IOPS)500，磁盘吞吐 100MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "132.15",
                    }]
                }]
            },
            {
                Name: "P15",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 256GB，磁盘读写 (IOPS)1100，磁盘吞吐 125MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "254.86",
                    }]
                }]
            },
            {
                Name: "P20",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 512GB，磁盘读写 (IOPS)2300，磁盘吞吐 150MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "490.93",
                    }]
                }]
            },
            {
                Name: "P30",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 1TB，磁盘读写 (IOPS)5000，磁盘吞吐 200MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "906.29",
                    }]
                }]
            },
            {
                Name: "P40",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 2TB，磁盘读写 (IOPS)7500，磁盘吞吐 250MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1736.83",
                    }]
                }]
            },
            {
                Name: "P50",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 4TB，磁盘读写 (IOPS)7500，磁盘吞吐 250MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3322.63",
                    }]
                }]
            }]
        },

        "storage-manager-disk-gpv1-premium-snapshots": {
            Name: "存储 - 高级托管磁盘 - 常规用途 v1 - 快照",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "快照",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "2.35",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-page-blobs-gpv1-premium-snapshots": {
            Name: "存储 - 高级页 Blob - 常规用途 v1 - 快照",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "快照",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "2.35",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "storage-ssd-manager-disk-gpv1-standard": {
            Name: "存储 - 标准 SSD 托管磁盘 - 常规用途 v1",
            Types: [
                {
                    Name: "E4",
                    Features: [{
                        Name: "default",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "磁盘大小 32 GB",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "24.4225",
                        }]
                    }]
                },
                {
                    Name: "E6",
                    Features: [{
                        Name: "default",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "磁盘大小 64 GB",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "48.845",
                        }]
                    }]
                }, 
            {
                Name: "E10",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 128 GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "97.69",
                    }]
                }]
            },
            {
                Name: "E15",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 256GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "195.379",
                    }]
                }]
            },
            {
                Name: "E20",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 512 GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "390.758",
                    }]
                }]
            },
            {
                Name: "E30",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 1 TB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "781.517",
                    }]
                }]
            },
            {
                Name: "E40",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 2TB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1563.034",
                    }]
                }]
            },
            {
                Name: "E50",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 4TB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3126.067",
                    }]
                }]
            },
            {
                Name: "S40",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 2TB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "552.96",
                    }]
                }]
            },
            {
                Name: "S50",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 4TB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1105.92",
                    }]
                }]
            }
                //  ,
                //    {
                //       Name: "S60",
                //       Features: [{
                //           Name: "default",
                //           PricePeriod: PricePeriodEnum.Monthly,
                //           PriceUnit: "个",
                //           MinUnit: "0",
                //           MaxUnit: "20",
                //           Sizes: [{
                //               Name: "default",
                //               Description: "磁盘大小 8TB",
                //               PriceTier: PriceTierEnum.Fixed,
                //               PricePerTier: "2211.84",
                //           }]
                //       }]
                //}
            ]
        },

        "storage-ssd-manager-disk-gpv1-standard-snapshots": {
            Name: "存储 - 标准 SSD 托管磁盘 - 常规用途 v1 - 快照",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "快照",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.2211",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "storage-ssd-manager-disk-gpv1-standard-access": {
            Name: "存储 - 标准 SSD 托管磁盘 - 常规用途 v1 - 操作和数据传输价格",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "读取、写入和删除等操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0204",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },

        "storage-manager-disk-gpv1-standard": {
            Name: "存储 - 标准托管磁盘 - 常规用途 v1",
            Types: [{
                Name: "S4",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 32GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.64",
                    }]
                }]
            },
            {
                Name: "S6",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 64GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.28",
                    }]
                }]
            },
            {
                Name: "S10",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 128GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34.56",
                    }]
                }]
            },
            {
                Name: "S15",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 256GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "69.12",
                    }]
                }]
            },
            {
                Name: "S20",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 512GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "138.24",
                    }]
                }]
            },
            {
                Name: "S30",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 1TB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "276.48",
                    }]
                }]
            },
            {
                Name: "S40",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 2TB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "552.96",
                    }]
                }]
            },
            {
                Name: "S50",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 4TB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1105.92",
                    }]
                }]
            }
                //  ,
                //    {
                //       Name: "S60",
                //       Features: [{
                //           Name: "default",
                //           PricePeriod: PricePeriodEnum.Monthly,
                //           PriceUnit: "个",
                //           MinUnit: "0",
                //           MaxUnit: "20",
                //           Sizes: [{
                //               Name: "default",
                //               Description: "磁盘大小 8TB",
                //               PriceTier: PriceTierEnum.Fixed,
                //               PricePerTier: "2211.84",
                //           }]
                //       }]
                //}
            ]
        },

        "storage-manager-disk-gpv1-standard-snapshots": {
            Name: "存储 - 标准托管磁盘 - 常规用途 v1 - 快照",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "快照",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.3",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "storage-manager-disk-gpv1-standard-access": {
            Name: "存储 - 标准托管磁盘 - 常规用途 v1 - 操作和数据传输价格",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "读取、写入和删除等操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },

        "storage-page-blobs-gpv2-ummanager-disk-premium": {
            Name: "存储 - 高级页 Blob - 常规用途 v2",
            Types: [{
                Name: "P10",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 128GB，磁盘读写 (IOPS)500，磁盘吞吐 100MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "132.15",
                    }]
                }]
            },
            {
                Name: "P20",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 512GB，磁盘读写 (IOPS)2300，磁盘吞吐 150MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "490.93",
                    }]
                }]
            },
            {
                Name: "P30",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 1TB，磁盘读写 (IOPS)5000，磁盘吞吐 200MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "906.29",
                    }]
                }]
            },
            {
                Name: "P40",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 2TB，磁盘读写 (IOPS)7500，磁盘吞吐 250MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1736.83"
                    }]
                }]
            },
            {
                Name: "P50",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 4TB，磁盘读写 (IOPS)7500，磁盘吞吐 250MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3322.63"
                    }]
                }]
            },
            {
                Name: "P60",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 8TB，磁盘读写 (IOPS)7500，磁盘吞吐 250MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6343.21",
                    }]
                }]
            },
            {
                Name: "P4",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 32 GB，磁盘读写 (IOPS)120，磁盘吞吐 25MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "47.53",
                    }]
                }]
            },
            {
                Name: "P6",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 64 GB，磁盘读写 (IOPS)240，磁盘吞吐 50MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "91.9",
                    }]
                }]
            },
            {
                Name: "P15",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 256GB，磁盘读写 (IOPS)1000，磁盘吞吐 125MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "254.86",
                    }]
                }]
            }]
        },
        "storage-page-blobs-gpv2-premium-snapshots": {
            Name: "存储 - 高级页 Blob - 常规用途 v2 - 快照",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "快照",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "2.35",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-page-blobs-gpv2-standard": {
            Name: "存储 - 标准页 Blob - 常规用途 v2 - 数据存储价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "页 Blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.4579",
                        MinUnit: "0",
                        MaxUnit: "20000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "页 Blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.6106",
                        MinUnit: "0",
                        MaxUnit: "20000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "页 Blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.7632",
                        MinUnit: "0",
                        MaxUnit: "20000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "storage-page-blobs-gpv2-unmanager-disk-standard-access": {
            Name: "存储 - 用作非托管磁盘的页 Blob - 常规用途 v2 - 操作价格",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "读取、写入和删除等操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0051",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        }, 
        "storage-page-blobs-gpv2-page-blobs-access": {
            Name: "存储 - 页 Blob（非磁盘） - 常规用途 v2 - 操作价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0153",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "写入额外 IO 单位（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0237",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0153",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取额外 IO 单位（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0017",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.3053",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "写入额外 IO 单位（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0474",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0153",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取额外 IO 单位（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0017",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.3053",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "写入额外 IO 单位（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0474",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0153",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取额外 IO 单位（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0017",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },
        "storage-page-blobs-gpv1-ummanager-disk-premium": {
            Name: "存储 - 高级页 Blob - 常规用途 v1",
            Types: [{
                Name: "P10",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 128GB，磁盘读写 (IOPS)500，磁盘吞吐 100MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "132.15",
                    }]
                }]
            },
            {
                Name: "P20",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 512GB，磁盘读写 (IOPS)2300，磁盘吞吐 150MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "490.93",
                    }]
                }]
            },
            {
                Name: "P30",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 1TB，磁盘读写 (IOPS)5000，磁盘吞吐 200MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "906.29",
                    }]
                }]
            },
            {
                Name: "P40",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 2TB，磁盘读写 (IOPS)7500，磁盘吞吐 250MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1736.83"
                    }]
                }]
            },
            {
                Name: "P50",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 4TB，磁盘读写 (IOPS)7500，磁盘吞吐 250MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3322.63"
                    }]
                }]
            },
            {
                Name: "P60",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 8TB，磁盘读写 (IOPS)7500，磁盘吞吐 250MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6343.21",
                    }]
                }]
            },
            {
                Name: "P4",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 32 GB，磁盘读写 (IOPS)120，磁盘吞吐 25MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "47.53",
                    }]
                }]
            },
            {
                Name: "P6",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 64 GB，磁盘读写 (IOPS)240，磁盘吞吐 50MB/sec ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "91.9",
                    }]
                }]
            },
            {
                Name: "P15",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "磁盘大小 256GB，磁盘读写 (IOPS)1000，磁盘吞吐 125MB/sec",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "254.86",
                    }]
                }]
            }]
        },
        
        "storage-page-blobs-gpv1-ummanager-disk-standard": {
            Name: "存储 - 标准页 Blob - 常规用途 v1",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "标准页 Blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000,512001,1024000,1024001,5120000",
                        PricePerTier: "0.44,0.3667,0.33,0.2933,0.275",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "标准页 Blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000,512001,1024000,1024001,5120000",
                        PricePerTier: "0.88,0.7334,0.66,0.5866,0.55",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "标准页 Blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000,512001,1024000,1024001,5120000",
                        PricePerTier: "1.056,0.8801,0.792,0.7039,0.66",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "storage-page-blobs-gpv1-unmanager-disk-standard-access": {
            Name: "存储 - 用作非托管磁盘的页 Blob - 常规用途 v1 - 操作价格",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "读取、写入和删除等操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0037",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        }, 

        "storage-page-blobs-gpv1-ummanager-disk-blob": {
            Name: "存储 - 标准页 Blob - 常规用途 v1 - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "删除操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "删除操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "写入操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "删除操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },

        "storage-general-purpose-page-blob-disk": {
            Name: "存储 - 常规用途存储账户 - 页 Blob 和磁盘",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "页 blob 和磁盘",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000,512001,1024000,1024001,5120000",
                        PricePerTier: "0.44,0.3667,0.33,0.2933,0.275",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "页 blob 和磁盘",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000,512001,1024000,1024001,5120000",
                        PricePerTier: "0.88,0.7334,0.66,0.5866,0.55",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "页 blob 和磁盘",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000,512001,1024000,1024001,5120000",
                        PricePerTier: "1.056,0.8801,0.792,0.7039,0.66",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "storage-general-purpose-page-blob-access": {
            Name: "存储 - 常规用途存储账户 - 页 Blob - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "放置页 Blob、创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "放置页 Blob、创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0088",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "除删除（此操作免费）之外的其他操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.0044",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },

        "storage-general-purpose-table": {
            Name: "存储 - 常规用途存储账户 - 表 - 数据存储价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "表",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.72,0.57,0.54",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "表",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.95,0.80,0.74",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "表",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "1.21,1.02,0.94",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "storage-general-purpose-table-access": {
            Name: "存储 - 常规用途存储账户 - 表 - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "放置表、创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "批处理放置表、创建容器操作 （按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "表读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "扫描容器操作 （按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.04",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "表删除操作 （按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "放置表、创建容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.04",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "批处理放置表、创建容器操作 （按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.04",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "列出容器操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "表读取操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "扫描容器操作 （按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.04",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "表删除操作 （按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },

        "storage-general-purpose-queues": {
            Name: "存储 - 队列 - 常规用途 v1 - 数据存储价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "队列",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.72,0.57,0.54",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "队列",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.95,0.80,0.74",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "队列",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "1.21,1.02,0.94",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "storage-general-purpose-queues-access": {
            Name: "存储 - 队列 - 常规用途 v1 - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "队列类别 1，操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.003663",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "队列类别 2，操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "GRS",
                Features: [{
                    Name: "队列类别 1，操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.003663",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "队列类别 2，操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            },
            {
                Name: "RA-GRS",
                Features: [{
                    Name: "队列类别 1，操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.003663",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                },
                {
                    Name: "队列类别 2，操作（按 10,000 计）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.02",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10000 个"
                    }]
                }]
            }]
        },

        "storage-import-export": {
            Name: "存储 - 导入与导出",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "5000",
                    Sizes: [{
                        Name: "default",
                        Description: "存储设备处理",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "380",
                    }]
                }]
            }]
        },
        "sql-database-elastic-vcore": {
            Name: "SQL 数据库 - 弹性数据库 - vCore - Gen 4",
            Types: [{
                Name: "常规用途",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "vCore 1",
                        Description: "1 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7781"
                    },
                    {
                        Name: "vCore 2",
                        Description: "2 个内核，每个池最大数据库 200 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.5563"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.1126"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.2251"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "28.4503"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "42.6754"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8631",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "2.0352",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "备份存储空间 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "1.272",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "备份存储空间 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.7505",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O 费率",
                        PriceTier: "0,5000",
                        PricePerTier: "1.501",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每 100 万次请求"
                    }]
                }]
            },
            {
                Name: "业务关键",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个内核，每个池最大数据库 50 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.3394"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.6789"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "37.3578"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "74.7156"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "112.0734"
                    }]
                },

                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.8762",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "备份存储空间 - RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "2.0352",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "备份存储空间 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "1.272",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "备份存储空间 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.7505",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O 费率",
                        PriceTier: "0,5000",
                        PricePerTier: "1.501",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每 100 万次请求"
                    }]
                }]
            }]
        },
        "sql-database-elastic-vcore-gen5": {
            Name: "SQL 数据库 - 弹性数据库 - vCore - Gen 5",
            Types: [{
                Name: "常规用途",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个内核，每个池最大数据库 200 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.5563"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.1126"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.2251"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "28.4503"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "42.6754"
                    },
                    {
                        Name: "vCore 32",
                        Description: "32 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "56.9006"
                    },
                    {
                        Name: "vCore 40",
                        Description: "40 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "71.1257"
                    },
                    {
                        Name: "vCore 80",
                        Description: "80 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "142.2514"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8631",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "2.0352",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "备份存储空间 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "1.272",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "备份存储空间 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.7505",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O 费率",
                        PriceTier: "0,5000",
                        PricePerTier: "1.501",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每 100 万次请求"
                    }]
                }]
            },
            {
                Name: "业务关键",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                    {
                        Name: "vCore 4",
                        Description: "4 个内核，每个池最大数据库 50 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.6789"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "37.3578"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "74.7156"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "112.0734"
                    },
                    {
                        Name: "vCore 32",
                        Description: "32 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "149.4312"
                    },
                    {
                        Name: "vCore 40",
                        Description: "40 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "186.789"
                    },
                    {
                        Name: "vCore 24",
                        Description: "80 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "373.5779"
                    }]
                },

                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.8762",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "备份存储空间 - RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "2.0352",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "备份存储空间 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "1.272",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "备份存储空间 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.7505",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O 费率",
                        PriceTier: "0,5000",
                        PricePerTier: "1.501",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每 100 万次请求"
                    }]
                }]
            }]
        },
        "sql-database-elastic-vcore-hybrid": {
            Name: "SQL 数据库 - 弹性数据库 - vCore - Gen 4 - Azure 混合权益",
            Types: [{
                Name: "常规用途",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "vCore 1",
                        Description: "1 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.1424"
                    },
                    {
                        Name: "vCore 2",
                        Description: "2 个内核，每个池最大数据库 200 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.2847"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.5694"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.1389"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.2777"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.4166"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8631",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "业务关键",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个内核，每个池最大数据库 50 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.5694"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.1389"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.2778"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "36.5556"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "54.8334"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.8762",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "sql-database-elastic-vcore-hybrid-gen5": {
            Name: "SQL 数据库 - 弹性数据库 - vCore - Gen 5 - Azure 混合权益",
            Types: [{
                Name: "常规用途",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                    {
                        Name: "vCore 2",
                        Description: "2 个内核，每个池最大数据库 200 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.2847"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.5694"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.1389"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.2777"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.4166"
                    },
                    {
                        Name: "vCore 32",
                        Description: "32 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "36.5555"
                    },
                    {
                        Name: "vCore 40",
                        Description: "40 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45.6944"
                    },
                    {
                        Name: "vCore 80",
                        Description: "80 个内核，每个池最大数据库 500 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "91.3888"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8631",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "业务关键",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                    {
                        Name: "vCore 4",
                        Description: "4 个内核，每个池最大数据库 50 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.1389"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.2778"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "36.5556"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "54.8334"
                    },
                    {
                        Name: "vCore 32",
                        Description: "32 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "73.112"
                    },
                    {
                        Name: "vCore 40",
                        Description: "40 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "91.389"
                    },
                    {
                        Name: "vCore 80",
                        Description: "80 个内核，每个池最大数据库 100 个",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "182.7779"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.8762",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "sql-database-elastic-dtu": {
            Name: "SQL 数据库 - 弹性数据库 - DTU",
            Types: [
                {
                    Name: "基本 ",
                    Features: [{
                        Name: "default",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        Sizes: [{
                            Name: CalculatorConst.Number50,
                            Description: CalculatorConst.Sql11SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "961.00"
                        },
                        {
                            Name: CalculatorConst.Number100,
                            Description: CalculatorConst.Sql12SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "1922.00"
                        },
                        {
                            Name: CalculatorConst.Number200,
                            Description: CalculatorConst.Sql13SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "3844.00"
                        },
                        {
                            Name: CalculatorConst.Number300,
                            Description: CalculatorConst.Sql14SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "5766.00"
                        },
                        {
                            Name: CalculatorConst.Number400,
                            Description: CalculatorConst.Sql15SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "7688.00"
                        },
                        {
                            Name: CalculatorConst.Number800,
                            Description: CalculatorConst.Sql16SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "15376.00"
                        },
                        {
                            Name: CalculatorConst.Number1200,
                            Description: CalculatorConst.Sql17SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "23064.00"
                        },
                        {
                            Name: CalculatorConst.Number1600,
                            Description: CalculatorConst.Sql18SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "30752.00"
                        }]
                    }]
                },
                {
                    Name: "标准",
                    Features: [{
                        Name: "小于等于 400",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        Sizes: [{
                            Name: CalculatorConst.Number50,
                            Description: CalculatorConst.Sql21SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "1426.00"
                        },
                        {
                            Name: CalculatorConst.Number100,
                            Description: CalculatorConst.Sql22SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "2852.00"
                        },
                        {
                            Name: CalculatorConst.Number200,
                            Description: CalculatorConst.Sql23SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "5704.00"
                        },
                        {
                            Name: CalculatorConst.Number300,
                            Description: CalculatorConst.Sql24SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "11408.00"
                        },
                        {
                            Name: CalculatorConst.Number400,
                            Description: CalculatorConst.Sql25SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "11408.00"
                        }]
                    },
                    {
                        Name: "大于 800",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        Sizes: [{
                            Name: CalculatorConst.Number800,
                            Description: CalculatorConst.Sql26SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "22816.00"
                        },
                        {
                            Name: CalculatorConst.Number1200,
                            Description: CalculatorConst.Sql27SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "34224.00"
                        },
                        {
                            Name: CalculatorConst.Number1600,
                            Description: CalculatorConst.Sql28SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "45632.00"
                        },
                        {
                            Name: CalculatorConst.Number2000,
                            Description: CalculatorConst.Sql29SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "57040.00"
                        },
                        {
                            Name: CalculatorConst.Number2500,
                            Description: CalculatorConst.Sql210SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "71300.00"
                        },
                        {
                            Name: CalculatorConst.Number3000,
                            Description: CalculatorConst.Sql211SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "85560.00"
                        }]
                    }]
                },
                {
                    Name: "高级",
                    Features: [{
                        Name: "小于等于 1500",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        Sizes: [{
                            Name: CalculatorConst.Number125,
                            Description: CalculatorConst.Sql41SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "8835.00"
                        },
                        {
                            Name: CalculatorConst.Number250,
                            Description: CalculatorConst.Sql42SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "17670.00/"
                        },
                        {
                            Name: CalculatorConst.Number500,
                            Description: CalculatorConst.Sql43SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "35340.00"
                        },
                        {
                            Name: CalculatorConst.Number1000,
                            Description: CalculatorConst.Sql44SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "70680.00"
                        },
                        {
                            Name: CalculatorConst.Number1500,
                            Description: CalculatorConst.Sql45SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "106020.00"
                        }]
                    },
                    {
                        Name: "大于 1500",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        Sizes: [{
                            Name: CalculatorConst.Number2000,
                            Description: CalculatorConst.Sql46SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "141360.00"
                        },
                        {
                            Name: CalculatorConst.Number2500,
                            Description: CalculatorConst.Sql47SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "176700.00"
                        },
                        {
                            Name: CalculatorConst.Number3000,
                            Description: CalculatorConst.Sql48SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "212040.00"
                        },
                        {
                            Name: CalculatorConst.Number3500,
                            Description: CalculatorConst.Sql49SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "247380.00"
                        },
                        {
                            Name: CalculatorConst.Number4000,
                            Description: CalculatorConst.Sql410SizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "282720.00"
                        }]
                    }]
                },
                {
                    Name: "额外存储",
                    Features: [{
                        Name: "标准",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "100",
                        Sizes: [{
                            Name: "标准",
                            Description: "额外存储 - 标准",
                            PriceTier: "0,5000",
                            PricePerTier: "1.0812",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "GB"
                        }]
                    }, {
                        Name: "高级",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "100",
                        Sizes: [{
                            Name: "高级",
                            Description: "额外存储 - 高级",
                            PriceTier: "0,5000",
                            PricePerTier: "2.1624",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "GB"
                        }]
                    }]
                },
                {
                    Name: "长期保留存储",
                    Features: [{
                        Name: "长期保留存储 - RA-GRS",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "RA-GRS",
                            Description: "RA-GRS",
                            PriceTier: "0,5000",
                            PricePerTier: "0.375",
                             MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "GB"
                        }]
                    },
                    {
                        Name: "长期保留存储 - ZRS",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "ZRS",
                            Description: "长期保留存储 - ZRS",
                            PriceTier: "0,5000",
                            PricePerTier: "0.235",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "GB"
                        }]
                    },
                    {
                        Name: "长期保留存储 - LRS",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "LRS",
                            Description: "长期保留存储 - LRS",
                            PriceTier: "0,5000",
                            PricePerTier: "0.188",
                            MinUnit: "0",
                            MaxUnit: "5000",
                            PriceUnit: "GB"
                        }]
                    }]
                }]
        },
        "sql-database-single-vcore": {
            Name: "SQL 数据库 - 单个数据库 - vCore - Gen 4",
            Types: [{
                Name: "常规用途",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "vCore 1",
                        Description: "1 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7781"
                    },
                    {
                        Name: "vCore 2",
                        Description: "2 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.5563"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.1126"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.2251"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "28.4503"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "42.6754"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8631",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "备份存储空间 - RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "2.0352",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "备份存储空间 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "1.272",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "备份存储空间 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.7505",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O 费率",
                        PriceTier: "0,5000",
                        PricePerTier: "1.501",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每 100 万次请求"
                    }]
                }]
            },
            {
                Name: "业务关键",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                        {
                            Name: "vCore 1",
                            Description: "1 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "4.6697"
                        }, {
                            Name: "vCore 2",
                            Description: "2 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "9.3394"
                        },
                        {
                            Name: "vCore 4",
                            Description: "4 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "18.6789"
                        },
                        {
                            Name: "vCore 8",
                            Description: "8 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "37.3578"
                        },
                        {
                            Name: "vCore 16",
                            Description: "16 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "74.7156"
                        },
                        {
                            Name: "vCore 24",
                            Description: "24 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "112.0734"
                        }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.8762",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "备份存储空间 - RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "2.0352",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "备份存储空间 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "1.272",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "备份存储空间 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.7505",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O 费率",
                        PriceTier: "0,5000",
                        PricePerTier: "1.501",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每 100 万次请求"
                    }]
                }]
            }
            ,
            // {
            //     Name: "超大规模",
            //     Features: [{
            //         Name: "default",
            //         PricePeriod: PricePeriodEnum.Hourly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [
            //             {
            //                 Name: "vCore 1",
            //                 Description: "1 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "1.2473"
            //             }, {
            //                 Name: "vCore 2",
            //                 Description: "2 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "2.4945"
            //             },
            //             {
            //                 Name: "vCore 4",
            //                 Description: "4 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "4.9891"
            //             },
            //             {
            //                 Name: "vCore 8",
            //                 Description: "8 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "9.9781"
            //             },
            //             {
            //                 Name: "vCore 16",
            //                 Description: "16 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "19.9562"
            //             },
            //             {
            //                 Name: "vCore 24",
            //                 Description: "24 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "29.9344"
            //             }]
            //     },
            //     {
            //         Name: "存储",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "default",
            //             Description: "default",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.0176",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     },
            //     {
            //         Name: "备份存储空间 - RA-GRS",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "RA-GRS",
            //             Description: "备份存储空间 - RA-GRS",
            //             PriceTier: "0,5000",
            //             PricePerTier: "2.0352",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     },
            //     {
            //         Name: "备份存储空间 - ZRS",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "ZRS",
            //             Description: "备份存储空间 - ZRS",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.272",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     },
            //     {
            //         Name: "备份存储空间 - LRS",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "LRS",
            //             Description: "备份存储空间 - LRS",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.0176",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     },
            //     {
            //         Name: "I/O",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "I/O",
            //             Description: "I/O 费率",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.0176",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "每 100 万次请求"
            //         }]
            //     }]
            // }
        ]
        },
        "sql-database-single-vcore-gen5": {
            Name: "SQL 数据库 - 单个数据库 - vCore - Gen 5",
            Types: [{
                Name: "常规用途",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                    {
                        Name: "vCore 2",
                        Description: "2 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.5563"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.1126"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.2251"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "28.4503"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "42.6754"
                    },
                    {
                        Name: "vCore 32",
                        Description: "32  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "56.9006"
                    },
                    {
                        Name: "vCore 40",
                        Description: "40  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "71.1257"
                    },
                    {
                        Name: "vCore 80",
                        Description: "80 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "142.2514"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8631",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "备份存储空间 - RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "2.0352",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "备份存储空间 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "1.272",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "备份存储空间 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.7505",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O 费率",
                        PriceTier: "0,5000",
                        PricePerTier: "1.501",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每 100 万次请求"
                    }]
                }]
            },
            {
                Name: "业务关键",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                        {
                            Name: "vCore 1",
                            Description: "1 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "4.6697"
                        }, {
                            Name: "vCore 2",
                            Description: "2 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "9.3394"
                        },
                        {
                            Name: "vCore 4",
                            Description: "4 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "18.6789"
                        },
                        {
                            Name: "vCore 8",
                            Description: "8 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "37.3578"
                        },
                        {
                            Name: "vCore 16",
                            Description: "16 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "74.7156"
                        },
                        {
                            Name: "vCore 24",
                            Description: "24 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "112.0734"
                        },
                        {
                            Name: "vCore 32",
                            Description: "32 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "149.431"
                        },
                        {
                            Name: "vCore 40",
                            Description: "40 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "186.7888"
                        },
                        {
                            Name: "vCore 80",
                            Description: "80 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "373.5776"
                        }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.8762",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "备份存储空间 - RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "2.0352",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "备份存储空间 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "1.272",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份存储空间 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "备份存储空间 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.7505",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O 费率",
                        PriceTier: "0,5000",
                        PricePerTier: "1.501",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每 100 万次请求"
                    }]
                }]
            },
            // {
            //     Name: "超大规模",
            //     Features: [{
            //         Name: "default",
            //         PricePeriod: PricePeriodEnum.Hourly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [
            //             {
            //                 Name: "vCore 1",
            //                 Description: "1 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "1.2473"
            //             }, {
            //                 Name: "vCore 2",
            //                 Description: "2 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "2.4945"
            //             },
            //             {
            //                 Name: "vCore 4",
            //                 Description: "4 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "4.9891"
            //             },
            //             {
            //                 Name: "vCore 8",
            //                 Description: "8 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "9.9781"
            //             },
            //             {
            //                 Name: "vCore 16",
            //                 Description: "16 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "19.9562"
            //             },
            //             {
            //                 Name: "vCore 24",
            //                 Description: "24 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "29.9344"
            //             }]
            //     },
            //     {
            //         Name: "存储",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "default",
            //             Description: "default",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.0176",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     },
            //     {
            //         Name: "备份存储空间 - RA-GRS",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "RA-GRS",
            //             Description: "备份存储空间 - RA-GRS",
            //             PriceTier: "0,5000",
            //             PricePerTier: "2.0352",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     },
            //     {
            //         Name: "备份存储空间 - ZRS",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "ZRS",
            //             Description: "备份存储空间 - ZRS",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.272",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     },
            //     {
            //         Name: "备份存储空间 - LRS",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "LRS",
            //             Description: "备份存储空间 - LRS",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.0176",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     },
            //     {
            //         Name: "I/O",
                 //    PricePeriod: PricePeriodEnum.Monthly,
                 //    PriceUnit: "个",
                 //    MinUnit: "0",
                 //    MaxUnit: "20",
            //         Sizes: [{
            //             Name: "I/O",
            //             Description: "I/O 费率",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.0176",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "每 100 万次请求"
            //         }]
            //     }]
            // }
        ]
        },
        "sql-database-single-vcore-hybrid": {
            Name: "SQL 数据库 - 单个数据库 - vCore - Gen 4 - 混合权益",
            Types: [{
                Name: "常规用途",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "vCore 1",
                        Description: "1 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.1424"
                    },
                    {
                        Name: "vCore 2",
                        Description: "2 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.2847"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.5694"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.1389"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.2777"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.4166"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8631",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "业务关键",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                        {
                            Name: "vCore 1",
                            Description: "1 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "2.2847"
                        }, {
                            Name: "vCore 2",
                            Description: "2 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "4.5694"
                        },
                        {
                            Name: "vCore 4",
                            Description: "4 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "9.1389"
                        },
                        {
                            Name: "vCore 8",
                            Description: "8 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "18.2778"
                        },
                        {
                            Name: "vCore 16",
                            Description: "16 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "36.5556"
                        },
                        {
                            Name: "vCore 24",
                            Description: "24 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "54.8334"
                        }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.8762",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            // {
            //     Name: "超大规模",
            //     Features: [{
            //         Name: "default",
            //         PricePeriod: PricePeriodEnum.Hourly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [
            //             {
            //                 Name: "vCore 1",
            //                 Description: "1 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "0.9294"
            //             }, {
            //                 Name: "vCore 2",
            //                 Description: "2 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "1.8587"
            //             },
            //             {
            //                 Name: "vCore 4",
            //                 Description: "4 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "3.7175"
            //             },
            //             {
            //                 Name: "vCore 8",
            //                 Description: "8 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "7.435"
            //             },
            //             {
            //                 Name: "vCore 16",
            //                 Description: "16 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "14.87"
            //             },
            //             {
            //                 Name: "vCore 24",
            //                 Description: "24 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "22.305"
            //             }]
            //     },
            //     {
            //         Name: "存储",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "default",
            //             Description: "default",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.0176",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     }]
            // }
        ]
        },
        "sql-database-single-vcore-hybrid-gen5": {
            Name: "SQL 数据库 - 单个数据库 - vCore - Gen 5 - 混合权益",
            Types: [{
                Name: "常规用途",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                    {
                        Name: "vCore 2",
                        Description: "2 个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.2847"
                    },
                    {
                        Name: "vCore 4",
                        Description: "4  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.5694"
                    },
                    {
                        Name: "vCore 8",
                        Description: "8  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.1389"
                    },
                    {
                        Name: "vCore 16",
                        Description: "16  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.2777"
                    },
                    {
                        Name: "vCore 24",
                        Description: "24  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.4166"
                    },
                    {
                        Name: "vCore 32",
                        Description: "32  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "36.5555"
                    },
                    {
                        Name: "vCore 40",
                        Description: "40  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45.6944"
                    },
                    {
                        Name: "vCore 80",
                        Description: "80  个内核",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "91.3888"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8631",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "业务关键",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [
                        {
                            Name: "vCore 2",
                            Description: "2 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "4.5694"
                        },
                        {
                            Name: "vCore 4",
                            Description: "4 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "9.1389"
                        },
                        {
                            Name: "vCore 8",
                            Description: "8 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "18.2778"
                        },
                        {
                            Name: "vCore 16",
                            Description: "16 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "36.5555"
                        },
                        {
                            Name: "vCore 24",
                            Description: "24 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "54.8333"
                        },
                        {
                            Name: "vCore 32",
                            Description: "32 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "73.111"
                        },
                        {
                            Name: "vCore 40",
                            Description: "40 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "91.3888"
                        },
                        {
                            Name: "vCore 80",
                            Description: "80 个内核",
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "182.7776"
                        }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5000",
                        PricePerTier: "1.8762",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            // {
            //     Name: "超大规模",
            //     Features: [{
            //         Name: "default",
            //         PricePeriod: PricePeriodEnum.Hourly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [
            //             {
            //                 Name: "vCore 1",
            //                 Description: "1 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "0.9294"
            //             }, {
            //                 Name: "vCore 2",
            //                 Description: "2 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "1.8587"
            //             },
            //             {
            //                 Name: "vCore 4",
            //                 Description: "4 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "3.7175"
            //             },
            //             {
            //                 Name: "vCore 8",
            //                 Description: "8 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "7.435"
            //             },
            //             {
            //                 Name: "vCore 16",
            //                 Description: "16 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "14.87"
            //             },
            //             {
            //                 Name: "vCore 24",
            //                 Description: "24 个内核",
            //                 PriceTier: PriceTierEnum.Fixed,
            //                 PricePerTier: "22.305"
            //             }]
            //     },
            //     {
            //         Name: "存储",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "default",
            //             Description: "default",
            //             PriceTier: "0,5000",
            //             PricePerTier: "1.0176",
            //             MinUnit: "0",
            //             MaxUnit: "5000",
            //             PriceUnit: "GB"
            //         }]
            //     }]
            // }
        ]
        },
        "sql-database-single-dtu": {
            Name: "SQL 数据库 - 单个数据库 - DTU",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "5000",
                    Sizes: [{
                        Name: "default",
                        Description: "数据库大小限制 2GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "32.24"
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: CalculatorConst.S0Size,
                        Description: CalculatorConst.S0SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "97.03"
                    },
                    {
                        Name: CalculatorConst.S1Size,
                        Description: CalculatorConst.S1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "193.44"
                    },
                    {
                        Name: CalculatorConst.S2Size,
                        Description: CalculatorConst.S2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "485.15"
                    },
                    {
                        Name: CalculatorConst.S3Size,
                        Description: CalculatorConst.S3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "969.37"
                    },
                    {
                        Name: CalculatorConst.S4Size,
                        Description: CalculatorConst.S4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2011.7016"
                    },
                    {
                        Name: CalculatorConst.S6Size,
                        Description: CalculatorConst.S6SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4023.4032"
                    },
                    {
                        Name: CalculatorConst.S7Size,
                        Description: CalculatorConst.S7SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8046.732"
                    },
                    {
                        Name: CalculatorConst.S9Size,
                        Description: CalculatorConst.S9SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16093.5384"
                    },
                    {
                        Name: CalculatorConst.S12Size,
                        Description: CalculatorConst.S12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "30175.3752"
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "10",
                    Sizes: [{
                        Name: CalculatorConst.P1Size,
                        Description: CalculatorConst.P1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3001.11"
                    },
                    {
                        Name: CalculatorConst.P2Size,
                        Description: CalculatorConst.P2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6002.22"
                    },
                    {
                        Name: CalculatorConst.P4Size,
                        Description: CalculatorConst.P4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12004.44"
                    },
                    {
                        Name: CalculatorConst.P6Size,
                        Description: CalculatorConst.P6SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24008.57"
                    },
                    {
                        Name: CalculatorConst.P11Size,
                        Description: CalculatorConst.P11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45131.66"
                    },
                    {
                        Name: CalculatorConst.P15Size,
                        Description: CalculatorConst.P15SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "103155.91"
                    }]
                }]
            },
            {
                Name: "额外存储",
                Features: [{
                    Name: "标准",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "标准",
                        Description: "额外存储 - 标准",
                        PriceTier: "0,5000",
                        PricePerTier: "1.0812",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }, {
                    Name: "高级",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "高级",
                        Description: "额外存储 - 高级",
                        PriceTier: "0,5000",
                        PricePerTier: "2.1624",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "长期保留存储",
                Features: [{
                    Name: "长期保留存储 - RA-GRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "RA-GRS",
                        Description: "RA-GRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.375",
                         MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - ZRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "ZRS",
                        Description: "长期保留存储 - ZRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.235",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "长期保留存储 - LRS",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "LRS",
                        Description: "长期保留存储 - LRS",
                        PriceTier: "0,5000",
                        PricePerTier: "0.188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "sql-database-atp": {
            Name: "SQL 数据库 - 高级威胁防护 - ATP",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "免费",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "标准",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "152.64",
                    }]
                }]
            }]
        },

        "database-web-and-business": {
            Name: "SQL 数据库 - Web 和企业版",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        price: [{
                            PriceUnit: "MB",
                            PriceTier: "0,1,2,100,101,101,102,1024",
                            PricePerTier: "33.5,0,33.5,0",
                        },
                        {
                            PriceUnit: "GB",
                            PriceTier: "1,1,2,10,11,11,12,50,51,51,52,150",
                            PricePerTier: "67,26.8,13.2,13.4,7.7,6.7"
                        }]
                    }]
                }]
            }]
        },
        "mobile-service": {
            Name: "移动服务",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "10",
                    Sizes: [{
                        Name: "default",
                        Description: "免费运行多达 10 项具有 20MB SQL Database 的移动服务。根据流量增长情况无缝升级。（多达 50 万个事务和 100 个活动设备）",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            },
            {
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "10",
                    Sizes: [{
                        Name: "default",
                        Description: "每个单位 150 万次 API 调用和 5000 个活动设备。",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "160",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "10",
                    Sizes: [{
                        Name: "default",
                        Description: "每个单位 1500 万次 API 调用和 10 万个活动设备。",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1260",
                    }]
                }]
            }]
        },
        "event-hubs": {
            Name: "事件中心",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "入口事件",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "入口事件",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.18",
                        MinUnit: "0",
                        MaxUnit: "10000",
                        PriceUnit: "百万"
                    }]
                },
                {
                    Name: "吞吐量",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "吞吐量",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.10",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "小时"
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "入口事件",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "无使用时间上限限制",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.18",
                        MinUnit: "0",
                        MaxUnit: "10000",
                        PriceUnit: "百万"
                    }]
                },
                {
                    Name: "吞吐量",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "吞吐量",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.19",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "小时"
                    }]
                },
                {
                    Name: "捕获",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "捕获",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.636",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "小时"
                    }]
                }]
            },
            {
                Name: "专用",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "专用事件中心",
                        PriceTier: "0,1,1,2,2,3,3,4,5,10000",
                        PricePerTier: "183.6,0,0,0,45.9",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "小时"
                    }]
                }]
            }]
        },

        "automation": {
            Name: "自动化",
            Types: [{
                Name: "作业运行",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "前 500 分钟免费",
                        PriceTier: "0,500,501,1000000",
                        PricePerTier: "0,0.01",
                        MinUnit: "0",
                        MaxUnit: "1000000",
                        PriceUnit: "分钟"
                    }]
                }]
            }]
        },
        "power-bi-embedded": {
            Name: "Power BI Embedded",
            Types: [{
                Name: "A1",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "虚拟内核 1",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.4115"
                    }]
                }]
            },
            {
                Name: "A2",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "虚拟内核 2",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.7715"
                    }]
                }]
            },
            {
                Name: "A3",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "虚拟内核 4",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.5939"
                    }]
                }]
            },
            {
                Name: "A4",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "虚拟内核 8",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "51.2393"
                    }]
                }]
            },
            {
                Name: "A5",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "虚拟内核 16",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "102.5296"
                    }]
                }]
            },
            {
                Name: "A6",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "虚拟内核 32",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "205.1138"
                    }]
                }]
            }]
        },
        "power-bi-workspace-collections": {
            Name: "Power BI 工作区集合",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "按每百个会话计费",
                        PriceTier: "0,1,2,1000000",
                        PricePerTier: "0,32.86",
                        MinUnit: "0",
                        MaxUnit: "1000000",
                        PriceUnit: "百个会话"
                    }]
                }]
            }
            ]
        },

        "media-services-encoder": {
            Name: "媒体服务 - 编码 - 点播视频 (VoD) 编码",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "标准编码器",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,10000000",
                        PricePerTier: "0.09858",
                        MinUnit: "0",
                        MaxUnit: "10000000",
                        PriceUnit: "分钟"
                    }]
                },
                {
                    Name: "高级编码器",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,10000000",
                        PricePerTier: "0.35616",
                        MinUnit: "0",
                        MaxUnit: "10000000",
                        PriceUnit: "分钟"
                    }]
                }]
            }]
        },

        "media-services-media-reserved-unit": {
            Name: "媒体服务 - 编码 - 媒体保留单元",
            Types: [
                {
                    Name: "S1",
                    Features: [{
                        Name: "媒体保留单元",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,10000000",
                            PricePerTier: "0.13144",
                            MinUnit: "0",
                            MaxUnit: "10000000",
                            PriceUnit: "小时"
                        }]
                    }]
                },
                {
                    Name: "S2",
                    Features: [{
                        Name: "媒体保留单元",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,10000000",
                            PricePerTier: "0.26288",
                            MinUnit: "0",
                            MaxUnit: "10000000",
                            PriceUnit: "小时"
                        }]
                    }]
                },
                {
                    Name: "S3",
                    Features: [{
                        Name: "媒体保留单元",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,10000000",
                            PricePerTier: "0.52576",
                            MinUnit: "0",
                            MaxUnit: "10000000",
                            PriceUnit: "小时"
                        }]
                    }]
                }
            ]
        },
        "media-services-indexing": {
            Name: "媒体服务 - 媒体分析 - 索引编制",
            Types: [
                {
                    Name: "索引编制",
                    Features: [{
                        Name: "索引器",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,20000 ,20001,200000,200001,1000000,1000001,10000000",
                            PricePerTier: "0.34,0.33,0.29,0.26",
                            MinUnit: "0",
                            MaxUnit: "10000000",
                            PriceUnit: "分钟"
                        }]
                    }]
                }]
        },
        "media-services-media-reserved-redactor": {
            Name: "媒体服务 - 媒体分析 - 编修器",
            Types: [
                {
                    Name: "S1",
                    Features: [{
                        Name: "编修器",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,50000,50001,100000,1000001,100000000",
                            PricePerTier: "0.212,0.197,0.172",
                            MinUnit: "0",
                            MaxUnit: "100000000",
                            PriceUnit: "分钟"
                        }]
                    }]
                },
                {
                    Name: "S2",
                    Features: [{
                        Name: "编修器",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,50000,50001,100000,1000001,100000000",
                            PricePerTier: "0.424,0.394,0.344",
                            MinUnit: "0",
                            MaxUnit: "100000000",
                            PriceUnit: "分钟"
                        }]
                    }]
                },
                {
                    Name: "S3",
                    Features: [{
                        Name: "编修器",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "default",
                            PriceTier: "0,50000,50001,100000,1000001,100000000",
                            PricePerTier: "0.848,0.788,0.688",
                            MinUnit: "0",
                            MaxUnit: "100000000",
                            PriceUnit: "分钟"
                        }]
                    }]
                }
            ]
        },

        "media-services-stream": {
            Name: "媒体服务 - 流式处理",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "标准流式处理终结点",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "按需流式处理保留单位",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "423.894",
                        MinUnit: "0",
                        MaxUnit: "10",
                        PriceUnit: "个"
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "高级流式处理单元",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "按需流式处理保留单位",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "938.15",
                        MinUnit: "0",
                        MaxUnit: "10",
                        PriceUnit: "个"
                    }]
                }]
            }]
        },
        "media-services-channels": {
            Name: "媒体服务 - 实时频道",
            Types: [{
                Name: "default",
                Features: [
                    {
                        Name: "未编码的实时频道",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "未编码的实时频道",
                            PriceTier: PriceTierEnum.Linear,
                            PricePerTier: "6.4",
                            MinUnit: "0",
                            MaxUnit: "1000",
                            PriceUnit: "小时"
                        }]
                    },
                    {
                        Name: "使用实时编码的实时频道",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "使用实时编码的实时频道",
                            PriceTier: "0,20,21,100,101,250,251,1000",
                            PricePerTier: "24.74,21.14,20.69,20.25",
                            MinUnit: "0",
                            MaxUnit: "1000",
                            PriceUnit: "小时"
                        }]
                    }]
            }]
        },
        "media-services-content-protect": {
            Name: "媒体服务 - 内容保护",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "PlayReady",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "1.34",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "百个许可证"
                    }]
                },
                {
                    Name: "高级加密标准 (AES) 密钥",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "高级加密标准 (AES) 密钥",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.67",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "百个密钥"
                    }]
                },
                {
                    Name: "FairPlay",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "1.3144",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "百个许可证"
                    }]
                }]
            }]
        },
        "site-recovery": {
            Name: "站点恢复",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "Azure 站点恢复到客户拥有站点",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "Azure 站点恢复到客户拥有站点",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "101.27",
                        MinUnit: "0",
                        MaxUnit: "20",
                        PriceUnit: "个"
                    }]
                },
                {
                    Name: "Azure 站点恢复到 Azure",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "Azure 站点恢复到 Azure",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "342.55",
                        MinUnit: "0",
                        MaxUnit: "20",
                        PriceUnit: "个"
                    }]
                }]
            }]
        },
        "mysql-database-on-azure": {
            Name: "MySQL Database on Azure",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: CalculatorConst.mysqlMS1Size,
                        Description: CalculatorConst.mysqlMS1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.09",
                    },
                    {
                        Name: CalculatorConst.mysqlMS2Size,
                        Description: CalculatorConst.mysqlMS2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.18",
                    },
                    {
                        Name: CalculatorConst.mysqlMS3Size,
                        Description: CalculatorConst.mysqlMS3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.48",
                    },
                    {
                        Name: CalculatorConst.mysqlMS4Size,
                        Description: CalculatorConst.mysqlMS4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.44",
                    },
                    {
                        Name: CalculatorConst.mysqlMS5Size,
                        Description: CalculatorConst.mysqlMS5SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.16",
                    },
                    {
                        Name: CalculatorConst.mysqlMS6Size,
                        Description: CalculatorConst.mysqlMS6SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.24",
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: CalculatorConst.mysqlMP1Size,
                        Description: CalculatorConst.mysqlMP1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.64",
                    },
                    {
                        Name: CalculatorConst.mysqlMP2Size,
                        Description: CalculatorConst.mysqlMP2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.02",
                    }]
                }]
            }]
        },
        "azure-database-for-mysql": {
            Name: "Azure Database for MySQL",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "计算 - Gen 4",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 1",
                        Description: "1 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.2699",
                    },
                    {
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5398",
                    }]
                },
                {
                    Name: "计算 - Gen 5",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 1",
                        Description: "1 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.2699",
                    },
                    {
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5398",
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "存储",
                        Description: "存储",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 本地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "本地冗余",
                        Description: "本地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                // {
                //     Name: "备份 - 异地冗余",
                //     PricePeriod: PricePeriodEnum.Monthly,
                //     PriceUnit: "个",
                //     MinUnit: "0",
                //     MaxUnit: "1000",
                //     Sizes: [{
                //         Name: "异地冗余",
                //         Description: "异地冗余",
                //         PriceTier: "0,5120000",
                //         PricePerTier: "1.5875",
                //         MinUnit: "0",
                //         MaxUnit: "5120000",
                //         PriceUnit: "GB"
                //     }]
                // },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "百万"
                    }]
                }]
            },
            {
                Name: "常规用途",
                Features: [{
                    Name: "计算 - Gen 4",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6676",
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.3352",
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.6704",
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.3408",
                    },
                    {
                        Name: "vCore 32",
                        Description: "32 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.6816",
                    }]
                },
                {
                    Name: "计算 - Gen 5",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6676",
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.3352",
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.6704",
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.3408",
                    },
                    {
                        Name: "vCore 32",
                        Description: "32 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.6816",
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "存储",
                        Description: "存储",
                        PriceTier: "0,4096",
                        PricePerTier: "0.8033",
                        MinUnit: "0",
                        MaxUnit: "4096",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 本地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "本地冗余",
                        Description: "本地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 异地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "异地冗余",
                        Description: "异地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "1.5875",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "内存优化",
                Features: [{
                    Name: "计算 - Gen 5",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8748",
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.7496",
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.4992",
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.9984",
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "存储",
                        Description: "存储",
                        PriceTier: "0,4096",
                        PricePerTier: "0.8033",
                        MinUnit: "0",
                        MaxUnit: "4096",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 本地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "本地冗余",
                        Description: "本地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 异地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "异地冗余",
                        Description: "异地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "1.5875",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "azure-database-for-postgresql": {
            Name: "Azure Database for PostgreSQL",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "计算 - Gen 4",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 1",
                        Description: "1 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.2699",
                    },
                    {
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5398",
                    }]
                },
                {
                    Name: "计算 - Gen 5",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 1",
                        Description: "1 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.2699",
                    },
                    {
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5398",
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "存储",
                        Description: "存储",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "备份",
                        Description: "备份",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "I/O",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "I/O",
                        Description: "I/O",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "常规用途",
                Features: [{
                    Name: "计算 - Gen 4",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6676",
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.3352",
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.6704",
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.3408",
                    },
                    {
                        Name: "vCore 32",
                        Description: "32 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.6816",
                    }]
                },
                {
                    Name: "计算 - Gen 5",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.6676",
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.3352",
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.6704",
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.3408",
                    },
                    {
                        Name: "vCore 32",
                        Description: "32 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.6816",
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "存储",
                        Description: "存储",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.8033",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 本地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "本地冗余",
                        Description: "本地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 异地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "异地冗余",
                        Description: "异地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "1.5875",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "内存优化",
                Features: [{
                    Name: "计算 - Gen 5",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "vCore 2",
                        Description: "2 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8748",
                    },
                    {
                        Name: "vCore 4",
                        Description: "4 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.7496",
                    },
                    {
                        Name: "vCore 8",
                        Description: "8 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.4992",
                    },
                    {
                        Name: "vCore 16",
                        Description: "16 个 vCore",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.9984",
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "存储",
                        Description: "存储",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.8033",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 本地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "本地冗余",
                        Description: "本地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "0.7938",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "备份 - 异地冗余",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "异地冗余",
                        Description: "异地冗余",
                        PriceTier: "0,5120000",
                        PricePerTier: "1.5875",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "stream-analytics": {
            Name: "流分析",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "标准流式处理单元",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "流式处理单元",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.723",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "小时"
                    }]
                }]
            }]
        },
        "redis-cache": {
            Name: "用于 Redis 的 Azure 缓存",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: CalculatorConst.C0Size,
                        Description: CalculatorConst.C0SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.14",
                    },
                    {
                        Name: CalculatorConst.C1Size,
                        Description: CalculatorConst.C1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.35",
                    },
                    {
                        Name: CalculatorConst.C2Size,
                        Description: CalculatorConst.C2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.57",
                    },
                    {
                        Name: CalculatorConst.C3Size,
                        Description: CalculatorConst.C3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.14",
                    },
                    {
                        Name: CalculatorConst.C4Size,
                        Description: CalculatorConst.C4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.33",
                    },
                    {
                        Name: CalculatorConst.C5Size,
                        Description: CalculatorConst.C5SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.66",
                    },
                    {
                        Name: CalculatorConst.C6Size,
                        Description: CalculatorConst.C6SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.31",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",

                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: CalculatorConst.C0Size,
                        Description: CalculatorConst.C0SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.35",
                    },
                    {
                        Name: CalculatorConst.C1Size,
                        Description: CalculatorConst.C1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.87",
                    },
                    {
                        Name: CalculatorConst.C2Size,
                        Description: CalculatorConst.C2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.42",
                    },
                    {
                        Name: CalculatorConst.C3Size,
                        Description: CalculatorConst.C3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.85",
                    },
                    {
                        Name: CalculatorConst.C4Size,
                        Description: CalculatorConst.C4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.32",
                    },
                    {
                        Name: CalculatorConst.C5Size,
                        Description: CalculatorConst.C5SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.64",
                    },
                    {
                        Name: CalculatorConst.C6Size,
                        Description: CalculatorConst.C6SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.28",
                    }
                    ]
                },
                ]
            }
                ,
            {
                Name: "高级",
                Features: [{
                    Name: "default",

                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: CalculatorConst.P1Size,
                        Description: "缓存大小 6 GB ",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.72",
                    },
                    {
                        Name: CalculatorConst.P2Size,
                        Description: "缓存大小 13 GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.44",
                    },
                    {
                        Name: CalculatorConst.P3Size,
                        Description: "缓存大小 26 GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.88 ",
                    },
                    {
                        Name: CalculatorConst.P4Size,
                        Description: "缓存大小 53 GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "29.77",
                    },
                    {
                        Name: CalculatorConst.P5Size,
                        Description: "缓存大小 120 GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "63.92",
                    }
                    ]
                },
                ]
            }]
        },
        "notification-hub": {
            Name: "通知中心",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "每个月发送 1,000,000 条推送。",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            },
            {
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1,2,10,11,200",
                        PricePerTier: "46.16,0,4.61",
                        MinUnit: "0",
                        MaxUnit: "200",
                        PriceUnit: "百万"
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1,2,10,11,100,101,200",
                        PricePerTier: "923.41,0,46.16,11.54",
                        MinUnit: "0",
                        MaxUnit: "200",
                        PriceUnit: "百万"
                    }]
                }]
            }]
        },
        // "hdinsight": {
        //     Name: "HDInsight",
        //     Types: [
        //             {
        //             Name: "Hadoop",
        //             Features: [{
        //                 Name: "头节点 - A 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.A3Size,
        //                     Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.9425",
        //                 }]
        //             },
        //             {
        //                 Name: "头节点 - D 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "头节点 - Dv2 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3V2Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4V2Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5V2Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 }]
        //             },
        //             {
        //                 Name: "头节点 - Dv2  系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D12V2Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13V2Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14V2Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },{
        //                 Name: "数据节点 - A 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.A3Size,
        //                     Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.9425",
        //                 }]
        //             },
        //             {
        //                 Name: "数据节点 - D 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "数据节点 - Dv2 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3V2Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4V2Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5V2Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 }]
        //             },
        //             {
        //                 Name: "数据节点 - Dv2  系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D12V2Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13V2Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14V2Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             }]
        //         },
        //         {
        //             Name: "HBase",
        //             Features: [{
        //                 Name: "控制服务器 - A 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.A3Size,
        //                     Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.9425",
        //                 }]
        //             },
        //             {
        //                 Name: "控制服务器 - D 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "控制服务器 - Dv2 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3V2Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4V2Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5V2Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 }]
        //             },
        //             {
        //                 Name: "控制服务器 - Dv2  系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D12V2Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13V2Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14V2Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "区域服务器 - A 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.A3Size,
        //                     Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.9425",
        //                 }]
        //             },
        //             {
        //                 Name: "区域服务器 - D 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "区域服务器 - Dv2 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3V2Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4V2Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5V2Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 }]
        //             },
        //             {
        //                 Name: "区域服务器 - Dv2  系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D12V2Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13V2Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14V2Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "主节点/Zookeeper 节点 - A 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "3",
        //                 MaxUnit: "3",
        //                 Sizes: [{
        //                     Name: CalculatorConst.A2Size,
        //                     Description: CalculatorConst.A2HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.01",
        //                 },
        //                 {
        //                     Name: CalculatorConst.A3Size,
        //                     Description: CalculatorConst.A3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.03",
        //                 },
        //                 {
        //                     Name: CalculatorConst.A4Size,
        //                     Description: CalculatorConst.A4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.05",
        //                 },
        //                 {
        //                     Name: CalculatorConst.A5Size,
        //                     Description: CalculatorConst.A5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.71",
        //                 },
        //                 {
        //                     Name: CalculatorConst.A6Size,
        //                     Description: CalculatorConst.A6HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.43",
        //                 },
        //                 {
        //                     Name: CalculatorConst.A7Size,
        //                     Description: CalculatorConst.A7HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "6.85",
        //                 }]
        //             },
        //             {
        //                 Name: "主节点/Zookeeper 节点 - D 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "3",
        //                 MaxUnit: "3",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D1Size,
        //                     Description: CalculatorConst.D1HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.12",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D2Size,
        //                     Description: CalculatorConst.D2HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.23",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D3Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.47",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "8.94",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D11Size,
        //                     Description: CalculatorConst.D11HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.67",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "5.34",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.61",
        //                 },
    
        //                 {
        //                     Name: CalculatorConst.D14Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "17.29",
        //                 }]
        //             },
        //             {
        //                 Name: "主节点/Zookeeper 节点 - Dv2 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "3",
        //                 MaxUnit: "3",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D1V2Size,
        //                     Description: CalculatorConst.D1HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.12",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D2V2Size,
        //                     Description: CalculatorConst.D2HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.23",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D3V2Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.47",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4V2Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "8.94",
        //                 }]
        //             },
        //             {
        //                 Name: "主节点/Zookeeper 节点 - Dv2  系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "3",
        //                 MaxUnit: "3",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D11V2Size,
        //                     Description: CalculatorConst.D11HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.67",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12V2Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "5.34",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13V2Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.61",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14V2Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "17.29",
        //                 }]
        //             }]
        //         },
        //         {
        //             Name:"Storm",
        //             Features:[
        //             {
        //                 Name: "Nimbus 节点- D 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "Nimbus 节点- Dv2 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D1V2Size,
        //                     Description: CalculatorConst.D1HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "0.5981",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D2V2Size,
        //                     Description: CalculatorConst.D2HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.2362",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D3V2Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4V2Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5V2Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 }]
        //             },
        //             {
        //                 Name: "Nimbus 节点- Dv2  系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "2",
        //                 MaxUnit: "2",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D11V2Size,
        //                     Description: CalculatorConst.D11HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.9717"
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12V2Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434"
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13V2Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867"
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14V2Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234"
        //                 }]
        //             },
        //             {
        //                 Name: "监管服务器 - D 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "0",
        //                 MaxUnit: "100",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "监管服务器 - Dv2 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "0",
        //                 MaxUnit: "100",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D3V2Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4V2Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5V2Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 }]
        //             },
        //             {
        //                 Name: "监管服务器 - Dv2  系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "0",
        //                 MaxUnit: "100",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D12V2Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13V2Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14V2Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "Zookeeper 节点 - A 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "3",
        //                 MaxUnit: "3",
        //                 Sizes: [{
        //                     Name: CalculatorConst.A1Size,
        //                     Description: CalculatorConst.A1HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "0.3981",
        //                 },
        //                 {
        //                     Name: CalculatorConst.A2Size,
        //                     Description: CalculatorConst.A2HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "0.9662",
        //                 },
        //                 {
        //                     Name: CalculatorConst.A3Size,
        //                     Description: CalculatorConst.A3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.9425",
        //                 }]
        //             },
        //             {
        //                 Name: "Zookeeper 节点 - D 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "3",
        //                 MaxUnit: "3",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D1Size,
        //                     Description: CalculatorConst.D1HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "0.5981",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D2Size,
        //                     Description: CalculatorConst.D2HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.2362",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D3Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D11Size,
        //                     Description: CalculatorConst.D11HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.9717",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
    
        //                 {
        //                     Name: CalculatorConst.D14Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             },
        //             {
        //                 Name: "Zookeeper 节点 - Dv2 系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "3",
        //                 MaxUnit: "3",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D1V2Size,
        //                     Description: CalculatorConst.D1HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "0.5981",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D2V2Size,
        //                     Description: CalculatorConst.D2HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.2362",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D3V2Size,
        //                     Description: CalculatorConst.D3HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "2.4725",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D4V2Size,
        //                     Description: CalculatorConst.D4HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "4.965",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D5V2Size,
        //                     Description: CalculatorConst.D5HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "9.8999",
        //                 }]
        //             },
        //             {
        //                 Name: "Zookeeper 节点 - Dv2  系列",
        //                 PricePeriod: PricePeriodEnum.Hourly,
        //                 PriceUnit: "个",
        //                 MinUnit: "3",
        //                 MaxUnit: "3",
        //                 Sizes: [{
        //                     Name: CalculatorConst.D11V2Size,
        //                     Description: CalculatorConst.D11HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "1.9717",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D12V2Size,
        //                     Description: CalculatorConst.D12HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "3.9434",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D13V2Size,
        //                     Description: CalculatorConst.D13HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "7.8867",
        //                 },
        //                 {
        //                     Name: CalculatorConst.D14V2Size,
        //                     Description: CalculatorConst.D14HDSizeDesc,
        //                     PriceTier: PriceTierEnum.Fixed,
        //                     PricePerTier: "11.2234",
        //                 }]
        //             }
        //             ]
        //         },
        //         {
        //             Name:"Spark",
        //             Features:[
        //                 {
        //                     Name: "头节点 - A 系列",
        //                     PricePeriod: PricePeriodEnum.Hourly,
        //                     PriceUnit: "个",
        //                     MinUnit: "2",
        //                     MaxUnit: "2",
        //                     Sizes: [{
        //                         Name: CalculatorConst.A3Size,
        //                         Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "1.9425",
        //                     }]
        //                 },
        //                 {
        //                     Name: "头节点 - D 系列",
        //                     PricePeriod: PricePeriodEnum.Hourly,
        //                     PriceUnit: "个",
        //                     MinUnit: "2",
        //                     MaxUnit: "2",
        //                     Sizes: [{
        //                         Name: CalculatorConst.D3Size,
        //                         Description: CalculatorConst.D3HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "2.4725",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D4Size,
        //                         Description: CalculatorConst.D4HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "4.965",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D5Size,
        //                         Description: CalculatorConst.D5HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "9.8999",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D12Size,
        //                         Description: CalculatorConst.D12HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "3.9434",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D13Size,
        //                         Description: CalculatorConst.D13HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "7.8867",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D14Size,
        //                         Description: CalculatorConst.D14HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "11.2234",
        //                     }]
        //                 },
        //                 {
        //                     Name: "头节点 - Dv2 系列",
        //                     PricePeriod: PricePeriodEnum.Hourly,
        //                     PriceUnit: "个",
        //                     MinUnit: "2",
        //                     MaxUnit: "2",
        //                     Sizes: [{
        //                         Name: CalculatorConst.D3V2Size,
        //                         Description: CalculatorConst.D3HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "2.4725",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D4V2Size,
        //                         Description: CalculatorConst.D4HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "4.965",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D5V2Size,
        //                         Description: CalculatorConst.D5HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "9.8999",
        //                     }]
        //                 },
        //                 {
        //                     Name: "头节点 - Dv2  系列",
        //                     PricePeriod: PricePeriodEnum.Hourly,
        //                     PriceUnit: "个",
        //                     MinUnit: "2",
        //                     MaxUnit: "2",
        //                     Sizes: [{
        //                         Name: CalculatorConst.D12V2Size,
        //                         Description: CalculatorConst.D12HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "3.9434",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D13V2Size,
        //                         Description: CalculatorConst.D13HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "7.8867",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D14V2Size,
        //                         Description: CalculatorConst.D14HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "11.2234",
        //                     }]
        //                 },
        //                 {
        //             Name: "工作进程节点 - D 系列",
        //             PricePeriod: PricePeriodEnum.Hourly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "100",
        //             Sizes: [{
        //                 Name: CalculatorConst.D3Size,
        //                 Description: CalculatorConst.D3HDSizeDesc,
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "2.4725",
        //             },
        //             {
        //                 Name: CalculatorConst.D4Size,
        //                 Description: CalculatorConst.D4HDSizeDesc,
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "4.965",
        //             },
        //             {
        //                 Name: CalculatorConst.D5Size,
        //                 Description: CalculatorConst.D5HDSizeDesc,
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "9.8999",
        //             },
        //             {
        //                 Name: CalculatorConst.D12Size,
        //                 Description: CalculatorConst.D12HDSizeDesc,
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "3.9434",
        //             },
        //             {
        //                 Name: CalculatorConst.D13Size,
        //                 Description: CalculatorConst.D13HDSizeDesc,
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "7.8867",
        //             },
        //             {
        //                 Name: CalculatorConst.D14Size,
        //                 Description: CalculatorConst.D14HDSizeDesc,
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "11.2234",
        //             }]
        //                 },
        //                 {
        //                     Name: "工作进程节点 - Dv2 系列",
        //                     PricePeriod: PricePeriodEnum.Hourly,
        //                     PriceUnit: "个",
        //                     MinUnit: "0",
        //                     MaxUnit: "100",
        //                     Sizes: [{
        //                         Name: CalculatorConst.D3V2Size,
        //                         Description: CalculatorConst.D3HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "2.4725",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D4V2Size,
        //                         Description: CalculatorConst.D4HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "4.965",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D5V2Size,
        //                         Description: CalculatorConst.D5HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "9.8999",
        //                     }]
        //                 },
        //                 {
        //                     Name: "工作进程节点 - Dv2  系列",
        //                     PricePeriod: PricePeriodEnum.Hourly,
        //                     PriceUnit: "个",
        //                     MinUnit: "0",
        //                     MaxUnit: "100",
        //                     Sizes: [{
        //                         Name: CalculatorConst.D12V2Size,
        //                         Description: CalculatorConst.D12HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "3.9434",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D13V2Size,
        //                         Description: CalculatorConst.D13HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "7.8867",
        //                     },
        //                     {
        //                         Name: CalculatorConst.D14V2Size,
        //                         Description: CalculatorConst.D14HDSizeDesc,
        //                         PriceTier: PriceTierEnum.Fixed,
        //                         PricePerTier: "11.2234",
        //                     }]
        //                 }
        //                     ]
        //         }
        //     //     {
        //     //     Name: "A 系列",
        //     //     Features: [{
        //     //         Name: "default",
        //     //         PricePeriod: PricePeriodEnum.Hourly,
        //     //         PriceUnit: "个",
        //     //         MinUnit: "0",
        //     //         MaxUnit: "100",
        //     //         Sizes: [{
        //     //             Name: CalculatorConst.A1Size,
        //     //             Description: CalculatorConst.A1HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "0.51",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.A2Size,
        //     //             Description: CalculatorConst.A2HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "1.01",
        //     //         }, {
        //     //             Name: CalculatorConst.A3Size,
        //     //             Description: CalculatorConst.A3HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "2.03",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.A4Size,
        //     //             Description: CalculatorConst.A4HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "4.05",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.A5Size,
        //     //             Description: CalculatorConst.A5HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "1.71",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.A6Size,
        //     //             Description: CalculatorConst.A6HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "3.43",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.A7Size,
        //     //             Description: CalculatorConst.A7HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "6.85",
        //     //         }]
        //     //     }]
        //     // },
        //     // {
        //     //     Name: "D 系列",
        //     //     Features: [{
        //     //         Name: "default",
        //     //         PricePeriod: PricePeriodEnum.Hourly,
        //     //         PriceUnit: "个",
        //     //         MinUnit: "0",
        //     //         MaxUnit: "100",
        //     //         Sizes: [{
        //     //             Name: CalculatorConst.D1Size,
        //     //             Description: CalculatorConst.D1HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "1.12",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.D2Size,
        //     //             Description: CalculatorConst.D2HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "2.23",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.D3Size,
        //     //             Description: CalculatorConst.D3HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "4.47",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.D4Size,
        //     //             Description: CalculatorConst.D4HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "8.94",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.D11Size,
        //     //             Description: CalculatorConst.D11HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "2.67",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.D12Size,
        //     //             Description: CalculatorConst.D12HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "5.34",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.D13Size,
        //     //             Description: CalculatorConst.D13HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "9.61",
        //     //         },
        //     //         {
        //     //             Name: CalculatorConst.D14Size,
        //     //             Description: CalculatorConst.D14HDSizeDesc,
        //     //             PriceTier: PriceTierEnum.Fixed,
        //     //             PricePerTier: "17.29",
        //     //         }]
        //     //     },
        //     //     ]
        //     // }
        // ]
        // },
        "hdinsight-windows-hadoop-head": {
            Name: "HDInsight - Windows - Hadoop 群集 - 头节点",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: CalculatorConst.A6HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: CalculatorConst.A7HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                }]
            }]
        },

        "hdinsight-windows-hadoop-data": {
            Name: "HDInsight - Windows - Hadoop 群集 - 数据节点",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: CalculatorConst.A6HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: CalculatorConst.A7HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.67",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                }]
            }]
        },

        "hdinsight-linux-hadoop-head": {
            Name: "HDInsight - Linux - Hadoop 群集 - 头节点",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9425",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                }]
            }]
        },

        "hdinsight-linux-hadoop-data": {
            Name: "HDInsight - Linux - Hadoop 群集 - 数据节点",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9717",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                }]
            }]
        },

        "hdinsight-windows-hbase-head": {
            Name: "HDInsight - Windows - HBase 群集 - 控制服务器",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: CalculatorConst.A6HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: CalculatorConst.A7HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [
                        {
                            Name: CalculatorConst.D12V2Size,
                            Description: CalculatorConst.D12HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "5.34",
                        },
                        {
                            Name: CalculatorConst.D13V2Size,
                            Description: CalculatorConst.D13HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "9.61",
                        },
                        {
                            Name: CalculatorConst.D14V2Size,
                            Description: CalculatorConst.D14HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "17.29",
                        }]
                }]
            }]
        },

        "hdinsight-windows-hbase-region": {
            Name: "HDInsight - Windows - HBase 群集 - 区域服务器",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: CalculatorConst.A6HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: CalculatorConst.A7HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [
                        {
                            Name: CalculatorConst.D12V2Size,
                            Description: CalculatorConst.D12HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "5.34",
                        },
                        {
                            Name: CalculatorConst.D13V2Size,
                            Description: CalculatorConst.D13HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "9.61",
                        },
                        {
                            Name: CalculatorConst.D14V2Size,
                            Description: CalculatorConst.D14HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "17.29",
                        }]
                }]
            }]
        },

        "hdinsight-windows-hbase-zookeeper": {
            Name: "HDInsight - Windows - HBase 群集 - 主节点/Zookeeper 节点",
            Types: [{
                Name: "标准",
                Features: [
                    {
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.A2Size,
                        Description: CalculatorConst.A2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.01",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: CalculatorConst.A5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.71",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: CalculatorConst.A6HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: CalculatorConst.A7HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.12",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.23",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.67",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },

                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.12",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.23",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.67",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                }]
            }]
        },

        "hdinsight-linux-hbase-head": {
            Name: "HDInsight - Linux - HBase 群集 - 控制服务器",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9425",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [
                        {
                            Name: CalculatorConst.D12V2Size,
                            Description: CalculatorConst.D12HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "3.9434",
                        },
                        {
                            Name: CalculatorConst.D13V2Size,
                            Description: CalculatorConst.D13HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "7.8867",
                        },
                        {
                            Name: CalculatorConst.D14V2Size,
                            Description: CalculatorConst.D14HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "11.2234",
                        }]
                }]
            }]
        },

        "hdinsight-linux-hbase-region": {
            Name: "HDInsight - Linux - HBase 群集 - 区域服务器",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9425",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [
                        {
                            Name: CalculatorConst.D12V2Size,
                            Description: CalculatorConst.D12HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "3.9434",
                        },
                        {
                            Name: CalculatorConst.D13V2Size,
                            Description: CalculatorConst.D13HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "7.8867",
                        },
                        {
                            Name: CalculatorConst.D14V2Size,
                            Description: CalculatorConst.D14HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "11.2234",
                        }]
                }]
            }]
        },

        "hdinsight-linux-hbase-zookeeper": {
            Name: "HDInsight - Linux - HBase 群集 - 主节点/Zookeeper 节点",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.A2Size,
                        Description: CalculatorConst.A2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.9662",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9425",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5981",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.2362",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9717",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },

                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5981",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.2362",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9717",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                }]
            }]
        },

        "hdinsight-windows-storm-nimbus": {
            Name: "HDInsight - Windows - Storm 群集 - Nimbus 节点",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: CalculatorConst.A6HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: CalculatorConst.A7HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [
                        {
                            Name: CalculatorConst.D12V2Size,
                            Description: CalculatorConst.D12HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "5.34",
                        },
                        {
                            Name: CalculatorConst.D13V2Size,
                            Description: CalculatorConst.D13HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "9.61",
                        },
                        {
                            Name: CalculatorConst.D14V2Size,
                            Description: CalculatorConst.D14HDSizeDesc,
                            PriceTier: PriceTierEnum.Fixed,
                            PricePerTier: "17.29",
                        }]
                }]
            }]
        },

        "hdinsight-windows-storm-supervisor": {
            Name: "HDInsight - Windows - Storm 群集 - 监管服务器",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: CalculatorConst.A6HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: CalculatorConst.A7HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                }]
            }]
        },

        "hdinsight-windows-storm-zookeeper": {
            Name: "HDInsight - Windows - Storm 群集 - Zookeeper 节点",
            Types: [{
                Name: "标准",
                Features: [{
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.A1Size,
                        Description: CalculatorConst.A1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.51",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: CalculatorConst.A2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.01",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: CalculatorConst.A4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.05",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: CalculatorConst.A5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.71",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: CalculatorConst.A6HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: CalculatorConst.A7HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.85",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.12",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.23",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.67",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },

                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.12",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.23",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.67",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.34",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.61",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
                    }]
                }]
            }]
        },

        "hdinsight-linux-storm-nimbus": {
            Name: "HDInsight - Linux - Storm 群集 - Nimbus 节点",
            Types: [{
                Name: "标准",
                Features: [
                    {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5981",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.2362",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9717"
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434"
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867"
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234"
                    }]
                }]
            }]
        },

        "hdinsight-linux-storm-supervisor": {
            Name: "HDInsight - Linux - Storm 群集 - 监管服务器",
            Types: [{
                Name: "标准",
                Features: [
                    {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                }]
            }]
        },

        "hdinsight-linux-storm-zookeeper": {
            Name: "HDInsight - Linux - Storm 群集 - Zookeeper 节点",
            Types: [{
                Name: "标准",
                Features: [
                    {
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.A1Size,
                        Description: CalculatorConst.A1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.3981",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: CalculatorConst.A2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.9662",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9425",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D1Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5981",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.2362",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9717",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },

                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D1V2Size,
                        Description: CalculatorConst.D1HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5981",
                    },
                    {
                        Name: CalculatorConst.D2V2Size,
                        Description: CalculatorConst.D2HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.2362",
                    },
                    {
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "3",
                    MaxUnit: "3",
                    Sizes: [{
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9717",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                }]
            }]
        },

        "hdinsight-linux-spark-head": {
            Name: "HDInsight - Linux - Spark 群集 - 头节点",
            Types: [
                {
                Name: "标准",
                Features: [
                    {
                    Name: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.A3Size,
                        Description: "A3 内核数 4，内存数 7GB，磁盘大小 285GB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9425",
                    }]
                },
                {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "2",
                    MaxUnit: "2",
                    Sizes: [{
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                }]
            }]
        },

        "hdinsight-linux-spark-worker": {
            Name: "HDInsight - Linux - Spark 群集 - 工作进程节点",
            Types: [{
                Name: "标准",
                Features: [
                    {
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D3V2Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    }]
                },
                {
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                }]
            }]
        },

        "hdinsight-linux-spark-r-server-edge": {
            Name: "HDInsight - Linux - Spark 群集 - 使用 R Server 的边缘节点",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "D 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "1",
                    MaxUnit: "1",
                    Sizes: [{
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4725",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9717",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                },
                {
                    Name: "Dv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "1",
                    MaxUnit: "1",
                    Sizes: [{
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.965",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8999",
                    },
                    {
                        Name: CalculatorConst.D11V2Size,
                        Description: CalculatorConst.D11HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9717",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9434",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8867",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2234",
                    }]
                }]
            }]
        },

        "hdinsight-linux-spark-r-server-surcharge": {
            Name: "HDInsight - Linux - Spark 群集 - 使用 R Server 的附加费",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "数量是以上三个节点内核总数",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1",
                    Sizes: [{
                        Name: "default",
                        Description: "请按照您对以上三个节点所选择数量将所用内核数进行加总",
                        PriceTier: "0,5000",
                        PricePerTier: "0.52",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "个",
                    }]
                }]
            }]
        },

        "cdn": {
            Name: "CDN",
            Types: [{
                Name: " 标准版",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,10000,10001,50000,50001,100000,100001,5000000",
                        PricePerTier: "0.19,0.16,0.13,0.1",
                        MinUnit: "0",
                        MaxUnit: "5000000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "高级版",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,10000,10001,50000,50001,100000,100001,5000000",
                        PricePerTier: "0.45,0.42,0.39,0.36",
                        MinUnit: "0",
                        MaxUnit: "5000000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "schedule": {
            Name: "计划程序",
            Types: [{
                Name: "免费版",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "计划程序免费层服务中作业的执行次数将每 30 天计算一次。所有服务层都受制于最高执行频率和可执行作业总数的限制。在 30 天计算期限内，作业的执行数量实际会被限制为：每个标准单元 2160 万次执行，每个高级单元 216 亿次执行。",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            },
            {
                Name: "标准版",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "单元",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "费用将根据小时数按比例分摊。标准单元将在每创建 10 个作业集合（或其中一部分）后进行计费，并将按小时分摊。所有地域运行的作业将汇总后计费。",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "96.81",
                    }]
                }]
            },
            {
                Name: "高级 P10",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "单元",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "高级单元将在每创建 10,000 个作业集合（或其中一部分）后进行计费，同样按小时分摊。所有地域运行的作业将汇总后计费。",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "938.15",
                    }]
                }]
            },
            {
                Name: "高级 P20",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "单元",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "高级单元将在每创建 5,000 个作业集合（或其中一部分）后进行计费，同样按小时分摊。所有地域运行的作业将汇总后计费。",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10300",
                    }]
                }]
            }]
        },

        "backup": {
            Name: "备份 - Azure VM 及本地服务器备份",
            Types: [{
                Name: "小于 50 GB",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "0至50GB（含50GB） 数据的实例",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "31.65",
                    }]
                }]
            },
            {
                Name: "50 GB至500 GB",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "50GB至500GB（含500GB） 数据之间的实例",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "63.29",
                    }]
                }]
            },
            {
                Name: "大于 500 GB",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "大于500GB数据的实例",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "63.29",
                    }]
                }]
            }]
        },
        "backup-backup-storage": {
            Name: "备份存储空间",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "LRS 块 blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,512000",
                        PricePerTier: "0.18",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "GRS 块 blob",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,512000",
                        PricePerTier: "0.36",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "service-bus": {
            Name: "服务总线",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "消息操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "10000",
                    Sizes: [{
                        Name: "default",
                        Description: "消息操作",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.31",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "百万"
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "消息操作 - 基本费用 ",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "消息操作 - 基本费用",
                        Description: "消息操作 - 基本费用",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.0851"
                    }]
                },
                {
                    Name: "消息操作 ",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1,2,12,13,100,101,2500,2501,100000",
                        PricePerTier: "63.29,0,5.21,3.20,1.27",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "百万"
                    }]
                },
                {
                    Name: "中转连接",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1,2,100,101,500,501,10000",
                        PricePerTier: "0,0.18,0.15,0.10",
                        MinUnit: "0",
                        MaxUnit: "10000",
                        PriceUnit: "K"
                    }]
                },
                {
                    Name: "混合连接",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1,1,2,2,3,3,4,4,5,6,10000",
                        PricePerTier: "76.09,0,0,0,0,13.398",
                        MinUnit: "0",
                        MaxUnit: "10000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "中继小时数",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "中继小时数",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.52",
                        MinUnit: "0",
                        MaxUnit: "10000",
                        PriceUnit: "百"
                    }]
                },
                {
                    Name: "消息数",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "消息数",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.05",
                        MinUnit: "0",
                        MaxUnit: "10000",
                        PriceUnit: "万"
                    }]
                }]
            },{
                Name: "高级",
                Features: [
                {
                    Name: "消息传送操作",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,10000000",
                        PricePerTier: "9.4382",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "个消息单位"
                    }]
                }]
            }]
        },

        "ExpressRoute-virtual-network": {
            Name: "ExpressRoute 网关",
            Types: [{
                //     Name: "基本",
                //     Features: [{
                //         Name: "default",
                //         PricePeriod: PricePeriodEnum.Hourly,
                //         PriceUnit: "个",
                //         MinUnit: "0",
                //         MaxUnit: "2000",
                //         Sizes: [{
                //             Name: "default",
                //             Description: "基本 VPN 或 ExpressRoute 网关",
                //             PriceTier: PriceTierEnum.Fixed,
                //             PricePerTier: "0.25",
                //         }]
                //     }]
                // },
                // {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "标准 ExpressRoute 网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.19",
                    }]
                }]
            },
            {
                Name: "高性能",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "高性能 ExpressRoute 网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.13",
                    }]
                }]
            },
            {
                Name: "超高性能",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "超高性能 ExpressRoute 网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.91",
                    }]
                }]
            }]
        },
        "vpn-gateway": {
            Name: "VPN 网关",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "基本 VPN 网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.25",
                    }]
                },{
                    Name: "基本 VPN 网关 s2s tunnel",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "基本 VPN 网关 S2S 隧道",
                        PriceTier: "0,10",
                        PricePerTier: "0",
                        MinUnit: "0",
                        MaxUnit: "10",
                        PriceUnit: "个"
                        
                    }]
                },{
                    Name: "基本 VPN 网关 p2s tunnel",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "基本 VPN 网关 P2S 隧道",
                        PriceTier: "0,128",
                        PricePerTier: "0",
                        MinUnit: "0",
                        MaxUnit: "128",
                        PriceUnit: "个"
                        
                    }]
                }]
            },
            {
                Name: "VpnGw1",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw1 网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.1914",
                    }]
                },{
                    Name: "VpnGw1 s2s tunnel",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw1 S2S 隧道",
                        PriceTier: "0,10,11,30",
                        PricePerTier: "0,0.0945",
                        MinUnit: "0",
                        MaxUnit: "30",
                        PriceUnit: "个"
                        
                    }]
                },{
                    Name: "VpnGw1 p2s tunnel",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw1 P2S 隧道",
                        PriceTier: "0,128,129,250",
                        PricePerTier: "0,0.0636",
                        MinUnit: "0",
                        MaxUnit: "250",
                        PriceUnit: "个"
                        
                    }]
                }]
            },
            {
                Name: "VpnGw2",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw2 网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.1276",
                    }]
                },{
                    Name: "VpnGw2 s2s tunnel",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw2 S2S 隧道",
                        PriceTier: "0,10,11,100",
                        PricePerTier: "0,0.0945",
                        MinUnit: "0",
                        MaxUnit: "100",
                        PriceUnit: "个"
                        
                    }]
                },{
                    Name: "VpnGw2 p2s tunnel",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw2 P2S 隧道",
                        PriceTier: "0,128,129,500",
                        PricePerTier: "0,0.0636",
                        MinUnit: "0",
                        MaxUnit: "500",
                        PriceUnit: "个"
                        
                    }]
                }]
            },
            {
                Name: "VpnGw3",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw3 网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.95",
                    }]
                },{
                    Name: "VpnGw3 s2s tunnel",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw3 S2S 隧道",
                        PriceTier: "0,10,11,100",
                        PricePerTier: "0,0.0945",
                        MinUnit: "0",
                        MaxUnit: "100",
                        PriceUnit: "个"
                        
                    }]
                },{
                    Name: "VpnGw3 p2s tunnel",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "VpnGw3 P2S 隧道",
                        PriceTier: "0,128,129,1000",
                        PricePerTier: "0,0.0636",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                        
                    }]
                }]
            }]
        },

        "vpn-gateway-data-transfer": {
            Name: "VPN 网关 - 出站虚拟网络间数据传输",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "发生在两个不同区域之间",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "发生在两个不同区域之间",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.16",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },


        "ip-address": {
            Name: "IP 地址",
            Types: [
            {
                Name:"基本(经典)",
                Features:[
                    {
                    Name: "动态 IP 地址",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "第一个云服务 VIP：免费,其它￥0.026/小时",
                        PriceTier: "0,1,2,10000",
                        PricePerTier: "0,0.026",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]

                },
                {
                    Name: "静态 IP 地址（保留 + 使用）",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "前 5 个与正在使用的云服务关联的保留 IP 地址:免费,其他：¥0.026/小时",
                        PriceTier: "0,5,6,10000",
                        PricePerTier: "0,0.026",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]

                },
                {
                    Name: "IP 地址重新映射",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: " 0-100免费,之后￥0.456/重新映射*744小时",
                        PriceTier: "0,100,101,1000",
                        PricePerTier: "0,0.456",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]
                }]
            },
            {
                Name:"基本(ARM)",
                Features:[
                    {
                    Name: "动态 IP 地址",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,10000",
                        PricePerTier: "0.026",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]

                },
                {
                    Name: "静态 IP 地址（保留 + 使用）",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "前 5 个静态 IP 不收取保留费用但收取使用费用;其他:使用+保留,¥0.052/小时（¥38.688/月）",
                        PriceTier: "0,5,6,10000",
                        PricePerTier: "0.026,0.052",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]

                }]
            },
            {
                Name:"标准(ARM)",
                Features:[
                {
                    Name: "静态 IP 地址（保留 + 使用）",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,10000",
                        PricePerTier: "0.026",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]
                }]
            }
        ]
        },

        "traffic-manager": {
            Name: "流量管理器",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "DNS 查询",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,100,101,2000",
                        PricePerTier: "3.57,1.79",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "百万"
                    }]
                },
                {
                    Name: "运行状况检查 -Azure 终结点数",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "运行状况检查 -Azure 终结点数",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "2.38",
                        MinUnit: "0",
                        MaxUnit: "20",
                        PriceUnit: "个"
                    }]
                },
                {
                    Name: "快速间隔运行状况检查附加项 -Azure 终结点数",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "快速间隔运行状况检查附加项 -Azure 终结点数",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "8.16",
                        MinUnit: "0",
                        MaxUnit: "20",
                        PriceUnit: "个"
                    }]
                },
                {
                    Name: "运行状况检查-外部终结点数",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "运行状况检查-外部终结点数",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "3.57",
                        MinUnit: "0",
                        MaxUnit: "20",
                        PriceUnit: "个"
                    }]
                },
                {
                    Name: "快速间隔运行状况检查附加项-外部终结点数",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "快速间隔运行状况检查附加项-外部终结点数",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "15.24",
                        MinUnit: "0",
                        MaxUnit: "20",
                        PriceUnit: "个"
                    }]
                }]
            }]
        },
        "data-transfer": {
            Name: "数据传输 - 传出数据中心",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.67",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "data-transferenter": {
            Name: "数据传输 - 传入数据中心",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024,1025,2000",
                        PricePerTier: "0,0.67",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "virtual-network": {
            Name: "虚拟网络",
            Types: [{
                Name: "虚拟网络对等互连",
                Features: [{
                    Name: "同一区域内的 VNET 对等互连 - 入站数据传输",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.06572",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "同一区域内的 VNET 对等互连 - 出站数据传输",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.06572",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            },{
                Name: "全局 VNET 对等互连",
                Features: [{
                    Name: "全局 VNET 对等互连 - 入站数据传输",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.1638",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "全局 VNET 对等互连 - 出站数据传输",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.1638",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },


        "application-gateway-basic": {
            Name: "应用程序网关 - 基本",
            Types: [{
                Name: "小型",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "基本应用程序网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.16",
                    }]
                }]
            },
            {
                Name: "中型",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "基本应用程序网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.45",
                    }]
                }]
            },
            {
                Name: "大型",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "基本应用程序网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.01",
                    }]
                }]
            }]
        },

        "application-gateway-waf": {
            Name: "应用程序网关 - Web 应用程序防火墙 (WAF) ",
            Types: [{
                Name: "中型",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "WAF 应用程序网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8",
                    }]
                }]
            },
            {
                Name: "大型",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "WAF 应用程序网关",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.38",
                    }]
                }]
            }]
        },


        "application-gateway-data-process": {
            Name: "应用程序网关 - 数据处理",
            Types: [{
                Name: "小型",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,100000",
                        PricePerTier: "0.07",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "中型",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,10240,10241,100000",
                        PricePerTier: "0,0.06",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "大型",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,40960,40961,100000",
                        PricePerTier: "0,0.06",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },


        "expressroute-unlimited": {
            Name: "ExpressRoute - 无限数据计划",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "Mbp",
                    Description: "Mbp",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.K50Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2815.12",
                    },
                    {
                        Name: CalculatorConst.K100Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5681.82",
                    },
                    {
                        Name: CalculatorConst.K200Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10619.04",
                    },
                    {
                        Name: CalculatorConst.K500Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24008.50",
                    }]
                },
                {
                    Name: "Gbp",
                    Description: "Gbp",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.K1Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40168.06",
                    },
                    {
                        Name: CalculatorConst.K2Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "80336.13",
                    },
                    {
                        Name: CalculatorConst.K5Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "189297.60",
                    },
                    {
                        Name: CalculatorConst.K10Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "378595.80",
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "Mbp",
                    Description: "Mbp",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.K50Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13540.00",
                    },
                    {
                        Name: CalculatorConst.K100Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23220.00",
                    },
                    {
                        Name: CalculatorConst.K200Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40080.00",
                    },
                    {
                        Name: CalculatorConst.K500Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "83490.00",
                    }]
                },
                {
                    Name: "Gbp",
                    Description: "Gbp",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.K1Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "137780.00",
                    },
                    {
                        Name: CalculatorConst.K2Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "245560.00",
                    },
                    {
                        Name: CalculatorConst.K5Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "598400.00",
                    },
                    {
                        Name: CalculatorConst.K10Size,
                        Description: CalculatorConst.K1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1196800.00",
                    }]
                }]
            }]
        },



        "expressroute-measurement": {
            Name: "ExpressRoute - 计量数据计划",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "Mbp",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.K50Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "253.02",
                    },
                    {
                        Name: CalculatorConst.K100Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "461.68",
                    },
                    {
                        Name: CalculatorConst.K200Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "670.02",
                    },
                    {
                        Name: CalculatorConst.K500Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1340.36",
                    }]
                },
                {
                    Name: "Gbp",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.K1Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2010.70",
                    },
                    {
                        Name: CalculatorConst.K2Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4028.96",
                    },
                    {
                        Name: CalculatorConst.K5Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10067.98",
                    },
                    {
                        Name: CalculatorConst.K10Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23085.14",
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "Mbp ",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.K50Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10100.00",
                    },
                    {
                        Name: CalculatorConst.K100Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16210.00",
                    },
                    {
                        Name: CalculatorConst.K200Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26720.00",
                    },
                    {
                        Name: CalculatorConst.K500Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "53050.00",
                    }]
                },
                {
                    Name: "Gbp ",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.K1Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "86540.00",
                    },
                    {
                        Name: CalculatorConst.K2Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "143090.00",
                    },
                    {
                        Name: CalculatorConst.K5Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "357720.00",
                    },
                    {
                        Name: CalculatorConst.K10Size,
                        Description: CalculatorConst.K2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "719400.00",
                    }]
                }]
            }]
        },
        "expressroute-data": {
            Name: "ExpressRoute - 计量数据计划 - 传出数据流量费率",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.22",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },

        "support": {
            Name: "支持",
            IsDescription: true,
            Descriptions: ["计费和订阅管理", "服务仪表板", "Web 事件提交", "中断/修复不受限制", "电话支持", "ICP 备案支持"]
        },
        "key-vault": {
            Name: "密钥保管库",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "机密和软件保护的密钥",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.20",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "万"
                    }]
                },
                {
                    Name: "证书操作 - 续订",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "19.716",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "续订请求"
                    }]
                },
                {
                    Name: "证书操作 - 所有其他操作",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.20",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "10,000 个操作"
                    }]
                }]
            }]
        },

        "sql-data-warehouse": {
            Name: "SQL 数据仓库",
            Types: [{
                Name: "计算优化的 Gen2",
                Features: [{
                    Name: "cDWU",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "DW500c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40.25"
                    },
                    {
                        Name: "DW1000c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "80.5"
                    },
                    {
                        Name: "DW1500c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "120.75"
                    },
                    {
                        Name: "DW2000c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "161"
                    }]
                },
                {
                    Name: "cDWU ",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "DW2500c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "201.25"
                    },
                    {
                        Name: "DW3000c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "241.5"
                    },
                    {
                        Name: "DW5000c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "402.5"
                    },
                    {
                        Name: "DW6000c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "483"
                    }]
                },
                {
                    Name: " cDWU ",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "DW7500c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "603.75"
                    },
                    {
                        Name: "DW10000c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "805"
                    },
                    {
                        Name: "DW15000c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1207.5"
                    },
                    {
                        Name: "DW30000c",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2415"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120",
                        PricePerTier: "906.2894",
                        MinUnit: "0",
                        MaxUnit: "5120",
                        PriceUnit: "TB"
                    }]
                },
                {
                    Name: "异地冗余灾难恢复",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120",
                        PricePerTier: "1.056",
                        MinUnit: "0",
                        MaxUnit: "5120",
                        PriceUnit: "TB"
                    }]
                }]
            },
            {
                Name: "计算优化的 Gen1",
                Features: [{
                    Name: "DWU",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "DW100",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.05"
                    },
                    {
                        Name: "DW200",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.1"
                    },
                    {
                        Name: "DW300",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.15"
                    },
                    {
                        Name: "DWU400",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "32.2"
                    },
                    {
                        Name: "DW500",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40.25"
                    }]
                },
                {
                    Name: " DWU ",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "DW600",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "48.3"
                    },
                    {
                        Name: "DW1000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "80.5"
                    },
                    {
                        Name: "DW1200",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "96.6"
                    },
                    {
                        Name: "DW1500",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "120.75"
                    }]
                },
                {
                    Name: "DWU ",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "DW2000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "161"
                    },
                    {
                        Name: "DW3000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "241.5"
                    },
                    {
                        Name: "DW6000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "483"
                    }]
                },
                {
                    Name: "存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120",
                        PricePerTier: "906.2894",
                        MinUnit: "0",
                        MaxUnit: "5120",
                        PriceUnit: "TB"
                    }]
                },
                {
                    Name: "异地冗余灾难恢复",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120",
                        PricePerTier: "1.056",
                        MinUnit: "0",
                        MaxUnit: "5120",
                        PriceUnit: "TB"
                    }]
                }]
            }]
        },


        "azure-iot-hub": {
            Name: "Azure IoT 中心",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "B1",
                        Description: "消费总数每天为 400000，消费计算大小为 4KB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "101.76",
                    },
                    {
                        Name: "B2",
                        Description: "消费总数每天为 6000000，消费计算大小为 4KB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "508.8",
                    },
                    {
                        Name: "B3",
                        Description: "消费总数每天为 300000000，消费计算大小为 4KB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5088",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "免费",
                        Description: "消费总数每天为 8000，消费计算大小为 0.5KB",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    },
                    {
                        Name: "S1",
                        Description: "消费总数每天为 400000，消费计算大小为 4KB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "254.4",
                    },
                    {
                        Name: "S2",
                        Description: "消费总数每天为 6000000，消费计算大小为 4KB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3888",
                    },
                    {
                        Name: "S3",
                        Description: "消费总数每天为 300000000，消费计算大小为 4KB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "38880",
                    }]
                }]
            }]
        },



        "cosmos-db_ssd": {
            Name: "Azure Cosmos DB - SSD",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "GB",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "SSD 存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.576"
                    }]
                }]
            }]
        },


        "cosmos-db_ru": {
            Name: "Azure Cosmos DB - 保留的 RU 数",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "小时",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.082",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "百个 RU"
                    }]
                }]
            }]
        },


        "cosmos-db_add-on-provisioning": {
            Name: "Azure Cosmos DB - 附加预配：每分钟请求单位",
            Types: [{
                Name: "default",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "小时",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.0277",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "千个 RU"
                    }]
                }]
            }]
        },



        "sql-server-stretch-database": {
            Name: "SQL Server Stretch Database",
            Types: [{
                Name: "小于等于 600",
                Features: [{
                    Name: "DSU",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "100",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "22.51",
                    },
                    {
                        Name: "200",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45.02",
                    },
                    {
                        Name: "300",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "67.53",
                    },
                    {
                        Name: "400",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "90.04",
                    },
                    {
                        Name: "500",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "112.55",
                    },
                    {
                        Name: "600",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "135.06",
                    }]
                }]
            },
            {
                Name: "大于等于 1000",
                Features: [{
                    Name: "DSU",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "1000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "225.1",
                    },
                    {
                        Name: "1200",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "270.12",
                    },
                    {
                        Name: "1500",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "337.65",
                    },
                    {
                        Name: "2000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "450.2",
                    }]
                }]
            }]
        },


        "cognitive-services-face": {
            Name: "认知服务 - 人脸 API",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "最多 20 个事务/分钟，每月 30,000 个免费事务",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    MinUnit: "0",
                    MaxUnit: "1000000",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1000,1001,5000,5001,100000,100001,1000000",
                        PricePerTier: "6.36,5.09,3.82,2.54",
                        MinUnit: "0",
                        MaxUnit: "1000000",
                        PriceUnit: "每 1000 个事务"
                    }]

                }]
            },
            {
                Name: "人脸识别存储",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "千张图片",
                    MinUnit: "0",
                    MaxUnit: "100000",
                    Sizes: [{
                        Name: "default",
                        Description: "每张图片最大 4 MB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.59",
                    }]
                }]
            }]
        },

        // "cognitive-services-emotion": {
        //     Name: "认知服务 - 情绪识别 API",
        //     Types: [{
        //         Name: "免费",
        //         Features: [{
        //             Name: "default",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "每月 30,000 个免费事务，3,000 个状态查询/每月（限制为 5 个/分钟）",
        //                 PriceTier: PriceTierEnum.Free,
        //                 PricePerTier: "0",
        //             }]
        //         }]
        //     },
        //     {
        //         Name: "基本",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Monthly,
        //             PriceUnit: "千个事务",
        //             MinUnit: "0",
        //             MaxUnit: "100000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "每秒最多 10 个事务 （指定的面部矩形）",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "0.75",
        //             }]
        //         }]
        //     },
        //     {
        //         Name: "标准",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Monthly,
        //             PriceUnit: "千个事务",
        //             MinUnit: "0",
        //             MaxUnit: "100000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "每秒最多 10 个事务",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "1.85",
        //             }]
        //         }]
        //     }]
        // },

        "cognitive-services-computer-vision": {
            Name: "认知服务 - 计算机影像 API",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "每月 5,000 个免费事务",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            },
            {
                Name: "S1",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    MinUnit: "0",
                    MaxUnit: "100000",
                    Sizes: [{
                        Name: "default",
                        Description: "标签、人脸、获取缩略图颜色和图像类型",
                        PriceTier: "0,10,1001,5000,5001,20000",
                        PricePerTier: " 6.36,5.088,4.134",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "每 1000 个事务"
                    }]
                }]
            },
            {
                Name: "S2",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    MinUnit: "0",
                    MaxUnit: "100000",
                    Sizes: [{
                        Name: "default",
                        Description: "OCR (印刷)、成人、名人和地标",
                        PriceTier: "0,10,1001,5000,5001,20000",
                        PricePerTier: "9.54,6.36,4.13",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "每 1000 个事务"
                    }]
                }]
            },
            {
                Name: "S3",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    MinUnit: "0",
                    MaxUnit: "100000",
                    Sizes: [{
                        Name: "default",
                        Description: "描述和 OCR (手写)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.9",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "每 1000 个事务"
                    }]
                }]
            }]
        },
        "cognitive-services-content-moderator": {
            Name: "认知服务 - 内容审查 API",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "每月 5,000 个免费事务",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            }
        //     // ,
        //     // {
        //     //     Name: "S0",
        //     //     Features: [{
        //     //         Name: "default",
        //     //         PricePeriod: PricePeriodEnum.Monthly,
        //     //         MinUnit: "0",
        //     //         MaxUnit: "100000",
        //     //         Sizes: [{
        //     //             Name: "default",
        //     //             Description: "计算机辅助内容审查 API 以及用于图像、文本和视频的人工审阅工具",
        //     //             PriceTier: "0,10,1001,5000,5001,20000",
        //     //             PricePerTier: " 6.36,5.088,4.134",
        //     //             MinUnit: "0",
        //     //             MaxUnit: "100000",
        //     //             PriceUnit: "每 1000 个事务"
        //     //         }]
        //     //     }]
        //     // },]
        ]
        },
        "cognitive-services-text-analytics": {
            Name: "认知服务 - 文本分析 API",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "每月 5,000 个免费事务",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            }
        //     // ,
        //     // {
        //     //     Name: "S0",
        //     //     Features: [{
        //     //         Name: "default",
        //     //         PricePeriod: PricePeriodEnum.Monthly,
        //     //         MinUnit: "0",
        //     //         MaxUnit: "100000",
        //     //         Sizes: [{
        //     //             Name: "default",
        //     //             Description: "计算机辅助内容审查 API 以及用于图像、文本和视频的人工审阅工具",
        //     //             PriceTier: "0,10,1001,5000,5001,20000",
        //     //             PricePerTier: " 6.36,5.088,4.134",
        //     //             MinUnit: "0",
        //     //             MaxUnit: "100000",
        //     //             PriceUnit: "每 1000 个事务"
        //     //         }]
        //     //     }]
        //     // },]
        ]
        },

        // "analysis-services-devp": {
        //     Name: "Azure 分析服务 - 开发人员层",
        //     Types: [{
        //         Name:"default",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Hourly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "5000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "开发人员层",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "0.8395",
        //             }]
        //         }]
        //     }]
        // },

        "analysis-services-date": {
            Name: "Azure 分析服务 - 基本级别",
            Types: [{
                Name: "B1",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "B1 基本级别",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.4475",
                    }]
                }]
            },
            {
                Name: "B2",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "B2 基本级别",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.895",
                    }]
                }]
            }]
        },
        "analysis-services-ssl": {
            Name: "Azure 分析服务 - 标准级别",
            Types: [{
                Name: "S0",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "S0 标准级别",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.948",
                    }]
                }]
            },
            {
                Name: "S1",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "S1 标准级别",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "21.58",
                    }]
                }]
            },
            {
                Name: "S2",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "S2 标准级别",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "43.16",
                    }]
                }]
            },
            {
                Name: "S4",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "S4 标准级别",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "86.32",
                    }]
                }]
            }]
        },
        // "analysis-services-scale-out": {
        //     Name: "Azure 分析服务 - 标准级别 - 横向扩展",
        //     Types: [{
        //         Name: "S0",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Hourly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "2000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "标准级别 - 横向扩展 S0",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "9.71",
        //             }]
        //         }]
        //     },
        //     {
        //         Name: "S1",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Hourly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "2000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "标准级别 - 横向扩展 S1",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "16.19",
        //             }]
        //         }]
        //     },
        //     {
        //         Name: "S2",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Hourly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "2000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "标准级别 - 横向扩展 S2",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "32.37",
        //             }]
        //         }]
        //     },
        //     {
        //         Name: "S4",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Hourly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "2000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "标准级别 - 横向扩展 S4",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "64.74",
        //             }]
        //         }]
        //     }]
        // },
        // "api-management": {
        //     Name: "API 管理",
        //     Types: [{
        //         Name: "开发人员",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Monthly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "2000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "开发人员层 - 非生产用例和评估",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "162.44",
        //             }]
        //         }]
        //     },
        //     {
        //         Name: "标准",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Monthly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "2000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "标准层 - 中等数量生产用例",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "2299.89",
        //             }]
        //         }]
        //     },
        //     {
        //         Name: "高级",
        //         Features: [{
        //             Name: "default",
        //             PricePeriod: PricePeriodEnum.Monthly,
        //             PriceUnit: "个",
        //             MinUnit: "0",
        //             MaxUnit: "2000",
        //             Sizes: [{
        //                 Name: "default",
        //                 Description: "高级层 - 大批量或企业生产用例",
        //                 PriceTier: PriceTierEnum.Fixed,
        //                 PricePerTier: "9362.62",
        //             }]
        //         }]
        //     }]
        // },
        "api-management": {
            Name: "API 管理",
            Types: [{
                Name: "开发人员",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "开发人员层 - 非生产用例和评估",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5022",
                    }]
                }]
            },
            {
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "基本层 - 入门级的生产用例",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.5386",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "标准层 - 中等数量生产用例",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.1794",
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "高级层 - 大批量或企业生产用例",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "29.2229",
                    }]
                }]
            }]
        },
        "network-watcher": {
            Name: "网络观察程序",
            Types: [{
                Name: "收集的网络日志",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "月服务配额 5 GB",
                        PriceTier: "0,1,1,2,2,3,3,4,4,5,6,10000",
                        PricePerTier: "0,0,0,0,0,5.09",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            },
            {
                Name: "网络诊断工具",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "月服务配额 1,000 次检查",
                        PriceTier: "0,1,2,10000",
                        PricePerTier: "0,10",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "1,000 次检查"
                    }]
                }]
            },
            {
                Name: "连接监控",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "网络诊断工具 - 连接监视",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "30.52",
                    }]
                }]
            }]
        },
        "azure-monitor": {
            Name: "Azure 监控器",
            Types: [
                {
                    Name: "Log Analytics",
                    Features: [{
                        Name: "数据引入",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "每个客户每月 5 GB 免费",
                            PriceTier: "0,5,6,5120000",
                            PricePerTier: "0,23.4",
                            MinUnit: "0",
                            MaxUnit: "5120000",
                            PriceUnit: "GB"
                        }]
                    },{
                        Name: "数据保留",
                        PricePeriod: PricePeriodEnum.Monthly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "default",
                            Description: "引入 Azure Log Analytics 工作区的每 GB 数据均可免费保存 31 天",
                            PriceTier: "0,5120000",
                            PricePerTier: "1.02",
                            MinUnit: "0",
                            MaxUnit: "5120000",
                            PriceUnit: "月"
                        }]
                    }]
                },
                {
                Name: "度量值",
                Features: [{
                    Name: "指标查询（免费包含 1,000,000 个标准 API 调用）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "免费包含 1,000,000 个标准 API 调用",
                        PriceTier: "0,5000",
                        PricePerTier: "0.101",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "其他标准 API 调用（/1,000 个）"
                    }]
                }]
            },
            {
                Name: "通知",
                Features: [{
                    Name: "电子邮件（免费包含 1,000 封电子邮件）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "免费包含 1,000 封电子邮件",
                        PriceTier: "0,5000",
                        PricePerTier: "20.3",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "其他电子邮件（/100,000 封）"
                    }]
                },
                {
                    Name: "Webhook（免费包含 100,000 个 Webhook）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "免费包含 100,000 个 Webhook",
                        PriceTier: "0,5000",
                        PricePerTier: "6.1",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "其他 Webhook（/1,000,000 个）"
                    }]
                },
                {
                    Name: "短信 - 中国（+ 86）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.219165",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 中国香港特别行政区（+ 852）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "中国香港特别行政区（+ 852）",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.179988",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 澳大利亚（+ 61）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.36252",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 巴西（+ 55）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.148188",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 法国（+ 33）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.34344",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 德国（+ 49）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.634855",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 印度（+ 91）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.026711",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 爱尔兰（+ 353）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.251856",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 日本（+ 81）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.29256",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 荷兰（+ 31）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.8586",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 新加坡（+ 65）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.197605",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 南非（+ 27）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.158491",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 韩国（+ 82）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.29892",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 英国（+ 44）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,5000",
                        PricePerTier: "0.22896",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                },
                {
                    Name: "短信 - 美国（+ 1）",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "",
                        PriceTier: "0,100,101,5000",
                        PricePerTier: "0,0.065635",
                        MinUnit: "0",
                        MaxUnit: "5000",
                        PriceUnit: "每条短信"
                    }]
                }]
            }]
        },
        "batch": {
            Name: "批处理 - 低优先级",
            Types: [{
                Name: "Windows 虚拟机",
                Features: [{
                    Name: "Fv2 系列",
                    Description: "Fv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F2 v2",
                        Description: "2 vCPU，4 GiB RAM，16 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.8664"
                    },
                    {
                        Name: "F4 v2",
                        Description: "4 vCPU，8 GiB RAM，32 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7328"
                    },
                    {
                        Name: "F8 v2",
                        Description: "8 vCPU，16 GiB RAM，64 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.4656"
                    },
                    {
                        Name: "F16 v2",
                        Description: "16 vCPU，32 GiB RAM，128 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.9312"
                    }]
                },
                {
                    Name: "Fv2系列",
                    Description: "Fv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F32 v2",
                        Description: "32 vCPU，64 GiB RAM，256 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.8624"
                    },
                    {
                        Name: "F64 v2",
                        Description: "64 vCPU，128 GiB RAM，512 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.7248"
                    },
                    {
                        Name: "F72 v2",
                        Description: "72 vCPU，144 GiB RAM，576 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "55.4496"
                    }]
                },
                {
                    Name: "E2 64 v3",
                    Description: "E2 64 v3",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E64i v3",
                        Description: "E64i v3：64 vCPU，432GiB RAM，1600 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "20.532"
                    }]
                }
                    // ,
                    // {
                    //     Name: "NCsv3 系列",
                    //     Description: "NCsv3 系列",
                    //     PricePeriod: PricePeriodEnum.Hourly,
                    //     PriceUnit: "台",
                    //     MinUnit: "0",
                    //     MaxUnit: "100",
                    //     Sizes: [{
                    //         Name: "NC6s v3",
                    //         Description: "6 个核心，112 GiB RAM，336 GiB 临时存储空间",
                    //         PriceTier: PriceTierEnum.Fixed,
                    //         PricePerTier: "10.465"
                    //     },
                    //     {
                    //         Name: "NC12s v3",
                    //         Description: "12 个核心，224 GiB RAM，672 GiB 临时存储空间",
                    //         PriceTier: PriceTierEnum.Fixed,
                    //         PricePerTier: "20.93"
                    //     },
                    //     {
                    //         Name: "NC24s v3",
                    //         Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                    //         PriceTier: PriceTierEnum.Fixed,
                    //         PricePerTier: "41.86"
                    //     },
                    //     {
                    //         Name: "NC24rs v3",
                    //         Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                    //         PriceTier: PriceTierEnum.Fixed,
                    //         PricePerTier: "46.0454"
                    //     }]
                    // }
                ]
            },
            {
                Name: "Linux 虚拟机",
                Features: [{
                    Name: "Fv2 系列",
                    Description: "Fv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F2 v2",
                        Description: "2 vCPU，4 GiB RAM，16 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.2166"
                    },
                    {
                        Name: "F4 v2",
                        Description: "4 vCPU，8 GiB RAM，32 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.4332"
                    },
                    {
                        Name: "F8 v2",
                        Description: "8 vCPU，16 GiB RAM，64 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.8664"
                    },
                    {
                        Name: "F16 v2",
                        Description: "16 vCPU，32 GiB RAM，128 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7328"
                    }]
                },
                {
                    Name: "Fv2系列",
                    Description: "Fv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F32 v2",
                        Description: "32 vCPU，64 GiB RAM，256 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.4656"
                    },
                    {
                        Name: "F64 v2",
                        Description: "64 vCPU，128 GiB RAM，512 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.9312"
                    },
                    {
                        Name: "F72 v2",
                        Description: "72 vCPU，144 GiB RAM，576 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.8624"
                    }]
                },
                {
                    Name: "E2 64 v3",
                    Description: "E2 64 v3",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E64i v3",
                        Description: "E64i v3：64 vCPU，432GiB RAM，1600 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.332"
                    }]
                }
                    // ,
                    // {
                    //     Name: "NCsv3 系列",
                    //     Description: "NCsv3 系列",
                    //     PricePeriod: PricePeriodEnum.Hourly,
                    //     PriceUnit: "台",
                    //     MinUnit: "0",
                    //     MaxUnit: "100",
                    //     Sizes: [{
                    //         Name: "NC6s v3",
                    //         Description: "6 个核心，112 GiB RAM，336 GiB 临时存储空间",
                    //         PriceTier: PriceTierEnum.Fixed,
                    //         PricePerTier: "4.6708"
                    //     },
                    //     {
                    //         Name: "NC12s v3",
                    //         Description: "12 个核心，224 GiB RAM，672 GiB 临时存储空间",
                    //         PriceTier: PriceTierEnum.Fixed,
                    //         PricePerTier: "9.3416"
                    //     },
                    //     {
                    //         Name: "NC24s v3",
                    //         Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                    //         PriceTier: PriceTierEnum.Fixed,
                    //         PricePerTier: "18.6831"
                    //     },
                    //     {
                    //         Name: "NC24rs v3",
                    //         Description: "24 个核心，448 GiB RAM，1344 GiB 临时存储空间",
                    //         PriceTier: PriceTierEnum.Fixed,
                    //         PricePerTier: "20.5515"
                    //     }]
                    // }
                ]
            },
            {
                Name: "云服务",
                Features: [{
                    Name: "Fv2 系列",
                    Description: "Fv2 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F2 v2",
                        Description: "2 vCPU，4 GiB RAM，16 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.8664"
                    },
                    {
                        Name: "F4 v2",
                        Description: "4 vCPU，8 GiB RAM，32 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7328"
                    },
                    {
                        Name: "F8 v2",
                        Description: "8 vCPU，16 GiB RAM，64 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.4656"
                    },
                    {
                        Name: "F16 v2",
                        Description: "16 vCPU，32 GiB RAM，128 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.9312"
                    }]
                },
                {
                    Name: "Fv2系列",
                    Description: "Fv2系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "F32 v2",
                        Description: "32 vCPU，64 GiB RAM，256 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.8624"
                    },
                    {
                        Name: "F64 v2",
                        Description: "64 vCPU，128 GiB RAM，512 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.7248"
                    },
                    {
                        Name: "F72 v2",
                        Description: "72 vCPU，144 GiB RAM，576 GiB 临时存储空间",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "55.4496"
                    }]
                },
                {
                    Name: "E2 64 v3",
                    Description: "E2 64 v3",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "E64i v3",
                        Description: "E64i v3：64 vCPU，432GiB RAM，1600 GiB 临时存储",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "20.532"
                    }]
                }]
            }]
        },
        "logic-apps": {
            Name: "逻辑应用",
            Types: [{
                Name: "操作",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "逻辑应用 - 操作 - 每次执行价格",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.000254"
                    }]
                }]
            },
            {
                Name: "标准连接器",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "逻辑应用 - 标准连接器 - 每次执行价格",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.001272"
                    }]
                }]
            },
            {
                Name: "企业连接器",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "逻辑应用 - 企业连接器 - 每次执行价格",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.010176"
                    }]
                }]
            }]
        },
        "logic-apps-data-retention": {
            Name: "逻辑应用 - 数据保留",
            Types: [{
                Name: "数据保留",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "逻辑应用 - 数据保留",
                        PriceTier: "0,10000",
                        PricePerTier: "1.2211",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        "logic-apps-integration-account": {
           Name: "逻辑应用 - 集成帐户",
            Types: [{
                Name: "基本",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "逻辑应用 - 集成帐户 - 基本",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.1049"
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "逻辑应用 - 集成帐户 - 标准",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.7163"
                    }]
                }]
            }]
        },
        "customer-engagement-fabric": {
            Name: "用户连接服务",
            Types: [
                {
                Name: "短信价格",
                Features: [{
                    Name: "行业短信/验证码",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,100000,100001,500000,500001,1000000,1000001,3000000,3000001,6000000,6000001,10000000,10000001,10000001",
                        PricePerTier: "0.042,0.040,0.038,0.036,0.034,0.032,0.029",
                        MinUnit: "0",
                        MaxUnit: "10000000",
                        PriceUnit: "条"
                    }]
                },
                {
                    Name: "会员营销短信",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,100000,100001,500000,500001,1000000,1000001,3000000,3000001,6000000,6000001,10000000,10000001",
                        PricePerTier: "0.052,0.050,0.048,0.046,0.043,0.040,0.036",
                        MinUnit: "0",
                        MaxUnit: "10000000",
                        PriceUnit: "条"
                    }]
                }]
            },
            // {
            //     Name: "邮件服务",
            //     Features: [{
            //         Name: "邮件服务",
            //         PricePeriod: PricePeriodEnum.Monthly,
            //         PriceUnit: "个",
            //         MinUnit: "0",
            //         MaxUnit: "20",
            //         Sizes: [{
            //             Name: "default",
            //             Description: "default",
            //             PriceTier: "0,50000,50001,1000000,1000001,5000000,5000001",
            //             PricePerTier: "0,0.01,0.009,0.008",
            //             MinUnit: "0",
            //             MaxUnit: "10000000",
            //             PriceUnit: "封"
            //         }]
            //     }]
            // },
            {
                Name: "第三方登录",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "目前为免费服务。每个月可支持10万MAU。",
                        PriceTier: PriceTierEnum.Free,
                        PricePerTier: "0",
                    }]
                }]
            }]
        },

        "load-balancer": {
            Name: "负载均衡器",
            Types: [
                {
                Name: "标准",
                Features: [
                    {
                        Name: "每条规则价格",
                        PricePeriod: PricePeriodEnum.Hourly,
                        PriceUnit: "个",
                        MinUnit: "0",
                        MaxUnit: "20",
                        Sizes: [{
                            Name: "rules pricing",
                            Description: "每条规则每小时的价格",
                            PriceTier: "0,5,6,100000",
                            PricePerTier: "0.159,0.0636",
                            MinUnit: "0",
                            MaxUnit: "100000",
                            PriceUnit: "每条规则/小时"
                        }]
                    },
                    {
                    Name: "已处理数据",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,500000",
                        PricePerTier: "0.0318",
                        MinUnit: "0",
                        MaxUnit: "500000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "每个 NAT 的价格",
                    PricePeriod: PricePeriodEnum.Fixed,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "nat pricing",
                        Description: "每个 NAT 的价格",
                        PriceTier: "0,100000",
                        PricePerTier: "0.0636",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "每个"
                    }]
                }]
            },
            {
                Name: "基本",
                Features: [{
                    Name: "基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "0",
                    Sizes: [{
                        Name: "基本",
                        Description: "基本负载均衡器是免费的",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0"
                    }]
                }]
            }]
        },
        "dns": {
            Name: "DNS",
            Types: [
            {
                Name: "公共区域",
                Features: [{
                    Name: "托管 DNS 区域",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,20000",
                        PricePerTier: "3.98",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "个"
                    }]
                },{
                    Name: "DNS 查询",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,20000",
                        PricePerTier: "4.07",
                        MinUnit: "0",
                        MaxUnit: "20000",
                        PriceUnit: "百万"
                    }]
                }]
            }]
        },
        "container-registry": {
            Name: "容器注册表",
            Types: [
            {
                Name: "基本",
                Features: [{
                    Name: "容器注册表 - 基本",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "容器注册表",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "52.555",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "容器注册表 - 标准",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "容器注册表",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "210.3038",
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "容器注册表 - 高级",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "容器注册表",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "525.76",
                    }]
                }]
            }]
        },
        "container-registry-additional-storage-container-build": {
            Name: "容器注册表 - 附加存储 - 容器内部版本价格",
            Types: [{
                Name: "基本",
                Features: [
                {
                    Name: "附加存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "30.528",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "容器内部版本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024000",
                        PricePerTier: "1.8288",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "每 CPU"
                    }]
                }]
            },
            {
                Name: " 标准",
                Features: [{
                    Name: "附加存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "30.528",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "容器内部版本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024000",
                        PricePerTier: "1.8288",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "每 CPU"
                    }]
                }]
            },
            {
                Name: "高级",
                Features: [{
                    Name: "附加存储",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,5120000",
                        PricePerTier: "30.528",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "GB"
                    }]
                },
                {
                    Name: "容器内部版本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1024000",
                        PricePerTier: "1.8288",
                        MinUnit: "0",
                        MaxUnit: "5120000",
                        PriceUnit: "每 CPU"
                    }]
                }]
            }]
        }
    }
};
//  return CalculatorData;
//});

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
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.13",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.36",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.94",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.88",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.71",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 磁盘",
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
                        Description: "1个内核，2GiB RAM，10GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5405",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.0810",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.1620",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.3355",
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
                        Description: "2个内核，16GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9665",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9394",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.8775",
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
                     Name:CalculatorConst.D5V2Size,
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
                        PricePerTier: "1.88",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.51",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.03",
                    }
                    , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.79",
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
                Features: [{
                    Name: "A 系列",
                    Description: "A 系列",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.13",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.29",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.75",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.51",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.01",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.62",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.25",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.49",
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
                        Description: "1个内核，2GiB RAM，10GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.4370",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.8625",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.7365",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.4615",
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
                        Description: "2个内核，16GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8630",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.7338",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.4635",
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
                        PricePerTier: "0.44",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.92",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.85",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.73",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.57",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.14",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.29",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.58",
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
                     PricePerTier: "0.49",
                 },
                 {
                     Name: CalculatorConst.D2V2Size,
                     Description: CalculatorConst.D2V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "1.02",
                 },
                 {
                     Name: CalculatorConst.D3V2Size,
                     Description: CalculatorConst.D3V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "2.04",
                 },
                 {
                     Name: CalculatorConst.D4V2Size,
                     Description: CalculatorConst.D4V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "4.1",
                 },
                 {
                     Name: CalculatorConst.D5V2Size,
                     Description: CalculatorConst.D5V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "8.17",
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
                        PricePerTier: "1.73",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.46",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.92",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.83",
                    }
                    , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17.29",
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
                        PricePerTier: "0.43",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.9",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.8",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.61",
                    }
                    , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.19",
                    }]
                }]
            }]
        },
        "sql-server-standard": {
            Name: "虚拟机 - SQL Server For Windows",
            Types: [ {
                Name: "Web 版",
                Features: [{
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.33",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.53",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.04",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.86",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.73",
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
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.35",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.58",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.16",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.1",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.21",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.93",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.65",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.3",
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
                        Description: "1个内核，2GiB RAM，10GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.7605",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.301",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.382",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.7855",
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
                        Description: "2个内核，16GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.1865",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.1594",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.3275",
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
                        PricePerTier: "8.3275",
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
                     PricePerTier: "0.75",
                 },
                 {
                     Name: CalculatorConst.D2V2Size,
                     Description: CalculatorConst.D2V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "1.33",
                 },
                 {
                     Name: CalculatorConst.D3V2Size,
                     Description: CalculatorConst.D3V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "2.44",
                 },
                 {
                     Name: CalculatorConst.D4V2Size,
                     Description: CalculatorConst.D4V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "4.9",
                 },
                 {
                     Name: CalculatorConst.D5V2Size,
                     Description: CalculatorConst.D5V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "9.45",
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
                        PricePerTier: "2.1",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.98",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.96",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.92",
                    }
                    , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "20.2306",
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
                        PricePerTier: "0.68",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.19",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.17",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.36",
                    }
                    , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.42",
                    }]
                }]
            },
            {
                Name: "标准版",
                Features: [{
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.87",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.07",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.58",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.4",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.79",
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
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.89",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.12",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.7",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.64",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.27",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.19",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.36",
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
                        Description: "1个内核，2GiB RAM，10GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.3005",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.841",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.922",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.8455",
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
                        Description: "2个内核，16GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.7265",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.6994",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.3875",
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
                     PricePerTier: "3.29",
                 },
                 {
                     Name: CalculatorConst.D2V2Size,
                     Description: CalculatorConst.D2V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "3.87",
                 },
                 {
                     Name: CalculatorConst.D3V2Size,
                     Description: CalculatorConst.D3V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "4.98",
                 },
                 {
                     Name: CalculatorConst.D4V2Size,
                     Description: CalculatorConst.D4V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "9.96",
                 },
                 {
                     Name: CalculatorConst.D5V2Size,
                     Description: CalculatorConst.D5V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "19.58",
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
                        PricePerTier: "4.64",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.52",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.02",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "26.05",
                    }
                    , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "36.7973",
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
                        PricePerTier: "3.22",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.73",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.71",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.42",
                    }
                    , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.55",
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
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.54",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.74",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.25",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.07",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.13",
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
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.56",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.79",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.37",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.31",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.61",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.14",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.86",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "27.7",
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
                        Description: "1个内核，2GiB RAM，10GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.9705",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.511",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.592",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "25.1855",
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
                        Description: "2个内核，16GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.3965",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.3694",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "28.7275",
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
                     PricePerTier: "10.96",
                 },
                 {
                     Name: CalculatorConst.D2V2Size,
                     Description: CalculatorConst.D2V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "11.54",
                 },
                 {
                     Name: CalculatorConst.D3V2Size,
                     Description: CalculatorConst.D3V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "12.65",
                 },
                 {
                     Name: CalculatorConst.D4V2Size,
                     Description: CalculatorConst.D4V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "25.3",
                 },
                 {
                     Name: CalculatorConst.D5V2Size,
                     Description: CalculatorConst.D5V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "50.26",
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
                        PricePerTier: "12.31",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.19",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "28.36",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "56.73",
                    }
                    , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "86.3173",
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
                        PricePerTier: "10.89",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.4",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.38",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.76",
                    }
                    , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "49.23",
                    }]
                }]
            }]
        },
        "virtual-machines-ml-server": {
            Name: "虚拟机 - ML server",
            Types: [ {
                Name: "Web 版",
                Features: [{
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.33",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.47",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.88",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.53",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.07",
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
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.35",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.51",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.97",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.73",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.46",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.84",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.108",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.47",
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
                        Description: "1个内核，2GiB RAM，10GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.657",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.0825",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.9565",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9115",
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
                        Description: "2个内核，16GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.083",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.9538",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.9135",
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
                        PricePerTier: "0.66",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.14",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.07",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.18",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.79",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.36",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.74",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.47",
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
                     PricePerTier: "0.71",
                 },
                 {
                     Name: CalculatorConst.D2V2Size,
                     Description: CalculatorConst.D2V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "1.24",
                 },
                 {
                     Name: CalculatorConst.D3V2Size,
                     Description: CalculatorConst.D3V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "2.26",
                 },
                 {
                     Name: CalculatorConst.D4V2Size,
                     Description: CalculatorConst.D4V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "4.55",
                 },
                 {
                     Name: CalculatorConst.D5V2Size,
                     Description: CalculatorConst.D5V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "9.06",
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
                        PricePerTier: "1.95",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.68",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.37",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.72",
                    }
                    , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.7306",
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
                        PricePerTier: "0.65",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.12",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.02",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.06",
                    }
                    , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.08",
                    }]
                }]
            },
            {
                Name: "标准版",
                Features: [{
                    Name: "A 系列 - 基本",
                    Description: "A 系列 - 基本",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "台",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.87",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.01",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.42",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.07",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.13",
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
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.89",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.05",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.51",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.27",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.52",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.38",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.01",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12",
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
                        Description: "1个内核，2GiB RAM，10GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.197",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.6225",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.4965",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.9715",
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
                        Description: "2个内核，16GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.623",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.4938",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.9735",
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
                        PricePerTier: "3.2",
                    },
                    {
                        Name: CalculatorConst.D2Size,
                        Description: CalculatorConst.D2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.68",
                    },
                    {
                        Name: CalculatorConst.D3Size,
                        Description: CalculatorConst.D3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.61",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.24",
                    },
                    {
                        Name: CalculatorConst.D11Size,
                        Description: CalculatorConst.D11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.33",
                    },
                    {
                        Name: CalculatorConst.D12Size,
                        Description: CalculatorConst.D12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5.9",
                    },
                    {
                        Name: CalculatorConst.D13Size,
                        Description: CalculatorConst.D13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.8",
                    },
                    {
                        Name: CalculatorConst.D14Size,
                        Description: CalculatorConst.D14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.6",
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
                     PricePerTier: "3.25",
                 },
                 {
                     Name: CalculatorConst.D2V2Size,
                     Description: CalculatorConst.D2V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "3.78",
                 },
                 {
                     Name: CalculatorConst.D3V2Size,
                     Description: CalculatorConst.D3V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "4.8",
                 },
                 {
                     Name: CalculatorConst.D4V2Size,
                     Description: CalculatorConst.D4V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "9.61",
                 },
                 {
                     Name: CalculatorConst.D5V2Size,
                     Description: CalculatorConst.D5V2SizeDesc,
                     PriceTier: PriceTierEnum.Fixed,
                     PricePerTier: "19.19",
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
                        PricePerTier: "4.49",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6.22",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.43",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.85",
                    }
                    , {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "35.2973",
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
                        PricePerTier: "3.19",
                    },
                    {
                        Name: CalculatorConst.F2Size,
                        Description: CalculatorConst.F2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.66",
                    },
                    {
                        Name: CalculatorConst.F4Size,
                        Description: CalculatorConst.F4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4.56",
                    },
                    {
                        Name: CalculatorConst.F8Size,
                        Description: CalculatorConst.F8SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9.12",
                    }
                    , {
                        Name: CalculatorConst.F16Size,
                        Description: CalculatorConst.F16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.21",
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
                    Sizes: [{
                        Name: CalculatorConst.A0Size,
                        Description: "1个内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.54",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.68",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，60GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.09",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，120GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.74",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，240GiB 磁盘",
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
                        Description: "1个（共用）内核，0.75GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.56",
                    },
                    {
                        Name: CalculatorConst.A1Size,
                        Description: "1个内核，1.75GiB RAM，70GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.72",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "2个内核，3.5GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.18",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "4个内核，7GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.94",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "8个内核，14GiB RAM，605GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23.86",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "2个内核，14GiB RAM，135GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.05",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "4个内核，28GiB RAM，285GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "13.68",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "8个内核，56GiB RAM，605GiB 磁盘",
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
                        Description: "1个内核，2GiB RAM，10GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "10.867",
                    },
                    {
                        Name: CalculatorConst.A2v2Size,
                        Description: "2个内核，4GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11.2925",
                    },
                    {
                        Name: CalculatorConst.A4v2Size,
                        Description: "4个内核，8GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.1665",
                    },
                    {
                        Name: CalculatorConst.A8v2Size,
                        Description: "8个内核，16GiB RAM，80GiB 磁盘",
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
                        Description: "2个内核，16GiB RAM，20GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12.293",
                    },
                    {
                        Name: CalculatorConst.A4mv2Size,
                        Description: "4个内核，32GiB RAM，40GiB 磁盘",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "14.1638",
                    },
                    {
                        Name: CalculatorConst.A8mv2Size,
                        Description: "8个内核，64GiB RAM，80GiB 磁盘",
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
                }]
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
                        Description: "小型虚拟机 (1个内核、1.75GB RAM、40GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.36",
                    },
                    {
                        Name: CalculatorConst.A2Size,
                        Description: "中型虚拟机 (2个内核、3.5GB RAM、60GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.94",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: "大型虚拟机(4个内核，7GB RAM，120GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.88",
                    },
                    {
                        Name: CalculatorConst.A4Size,
                        Description: "超大型虚拟机(8个内核，14GB RAM，240GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76",
                    },
                    {
                        Name: CalculatorConst.A5Size,
                        Description: "内存密集型虚拟机 (2个内核 CPU、14GB RAM、489GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.71",
                    },
                    {
                        Name: CalculatorConst.A6Size,
                        Description: "内存密集型虚拟机 (4个内核, 28GB RAM,999 GB 存储)",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.43",
                    },
                    {
                        Name: CalculatorConst.A7Size,
                        Description: "内存密集型虚拟机 (8个内核、56GB RAM、2,039GB 存储)",
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
                        PricePerTier: "1.88",
                    },
                    {
                        Name: CalculatorConst.D12V2Size,
                        Description: CalculatorConst.D12V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3.76",
                    },
                    {
                        Name: CalculatorConst.D13V2Size,
                        Description: CalculatorConst.D13V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7.51",
                    },
                    {
                        Name: CalculatorConst.D14V2Size,
                        Description: CalculatorConst.D14V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15.03",
                    }
                    ,
                    {
                        Name: CalculatorConst.D15V2Size,
                        Description: CalculatorConst.D15V2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "18.79",
                    }
                    ]
                }]
            }]
        },
        "storage-cold-hot-block-blob-access": {
            Name: "存储 - “热”和“冷”访问层 - 块 Blob - 操作和数据传输价格",
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
        
        "storage-cold-hot-block-blob": {
            Name: "存储 - “热”和“冷”访问层 - 块 Blob",
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
        
        "storage-general-purpose-block-blob": {
            Name: "存储 - 常规用途存储账户 - 块 Blob",
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
            Name: "存储 - 常规用途存储账户 - 块 Blob - 操作和数据传输价格",
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
            },{
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
            Name: "存储 - 常规用途存储账户 - 文件",
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

        "storage-manager-disk-premium": {
            Name: "存储 - 高级托管磁盘",
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

        "storage-manager-disk-premium-snapshots": {
            Name: "存储 - 高级托管磁盘 - 快照",
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
        
        "storage-manager-disk-standard": {
            Name: "存储 - 标准托管磁盘",
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

        "storage-manager-disk-standard-snapshots": {
            Name: "存储 - 标准托管磁盘 - 快照",
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

        "storage-manager-disk-standard-access": {
            Name: "存储 - 标准托管磁盘 - 操作和数据传输价格",
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
        
        "storage-ummanager-disk-premium": {
            Name: "存储 - 高级非托管磁盘和页 Blob",
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
            }]
        },

        "storage-ummanager-disk-standard": {
            Name: "存储 - 标准非托管磁盘和页 Blob",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "标准非托管磁盘和页 Blob",
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
                    Name: "标准非托管磁盘和页 Blob",
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
                    Name: "标准非托管磁盘和页 Blob",
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
        
        "storage-ummanager-disk-blob": {
            Name: "存储 - 标准非托管磁盘和页 Blob - 操作和数据传输价格",
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
            Name: "存储 - 常规用途存储账户 - 表",
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
            Name: "存储 - 常规用途存储账户 - 队列",
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
            Name: "存储 - 常规用途存储账户 - 队列 - 操作和数据传输价格",
            Types: [{
                Name: "LRS",
                Features: [{
                    Name: "队列操作（按 10,000 计）",
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
                    Name: "队列操作（按 10,000 计）",
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

        
        
        "sql-database-basic-standard-and-premium": {
            Name: "SQL 数据库 - 单个数据库",
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
                        PricePerTier: "32.24",
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
                        PricePerTier: "97.03",
                    },
                    {
                        Name: CalculatorConst.S1Size,
                        Description: CalculatorConst.S1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "193.44",
                    },
                    {
                        Name: CalculatorConst.S2Size,
                        Description: CalculatorConst.S2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "485.15",
                    },
                    {
                        Name: CalculatorConst.S3Size,
                        Description: CalculatorConst.S3SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "969.37",
                    },
                    {
                        Name: CalculatorConst.S4Size,
                        Description: CalculatorConst.S4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1005.95",
                    },
                    {
                        Name: CalculatorConst.S6Size,
                        Description: CalculatorConst.S6SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2011.59",
                    },
                    {
                        Name: CalculatorConst.S7Size,
                        Description: CalculatorConst.S7SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4023.49",
                    },
                    {
                        Name: CalculatorConst.S9Size,
                        Description: CalculatorConst.S9SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8046.67",
                    },
                    {
                        Name: CalculatorConst.S12Size,
                        Description: CalculatorConst.S12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15087.7",
                    }]
                }]
            },
            {
                Name: "高级 RS",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: CalculatorConst.PRS1Size,
                        Description: CalculatorConst.PRS1SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "750.28",
                    },
                    {
                        Name: CalculatorConst.PRS2Size,
                        Description: CalculatorConst.PRS2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1500.56",
                    },
                    {
                        Name: CalculatorConst.PRS4Size,
                        Description: CalculatorConst.PRS4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3001.10",
                    },
                    {
                        Name: CalculatorConst.PRS6Size,
                        Description: CalculatorConst.PRS6SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6002.13",
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
                        PricePerTier: "3001.11",
                    },
                    {
                        Name: CalculatorConst.P2Size,
                        Description: CalculatorConst.P2SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "6002.22",
                    },
                    {
                        Name: CalculatorConst.P4Size,
                        Description: CalculatorConst.P4SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "12004.44",
                    },
                    {
                        Name: CalculatorConst.P6Size,
                        Description: CalculatorConst.P6SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24008.57",
                    },
                    {
                        Name: CalculatorConst.P11Size,
                        Description: CalculatorConst.P11SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45131.66",
                    },
                    {
                        Name: CalculatorConst.P15Size,
                        Description: CalculatorConst.P15SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "103155.91",
                    }]
                }]
            },
            {
                Name: "额外存储",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "标准",
                        Description: "额外存储 - 标准",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5406",
                    },
                    {
                        Name: "高级和高级 RS",
                        Description: "额外存储 - 高级和高级 RS",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.0812",
                    }]
                }]
            }]
        },
        "sql-elastic-database-basic-standard-and-premium": {
            Name: "SQL 数据库 - 弹性数据库",
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
                        PricePerTier: "961.00",
                    },
                    {
                        Name: CalculatorConst.Number100,
                        Description: CalculatorConst.Sql12SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1922.00",
                    },
                    {
                        Name: CalculatorConst.Number200,
                        Description: CalculatorConst.Sql13SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3844.00",
                    },
                    {
                        Name: CalculatorConst.Number300,
                        Description: CalculatorConst.Sql14SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5766.00",
                    },
                    {
                        Name: CalculatorConst.Number400,
                        Description: CalculatorConst.Sql15SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "7688.00",
                    },
                    {
                        Name: CalculatorConst.Number800,
                        Description: CalculatorConst.Sql16SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "15376.00",
                    },
                    {
                        Name: CalculatorConst.Number1200,
                        Description: CalculatorConst.Sql17SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "23064.00",
                    },
                    {
                        Name: CalculatorConst.Number1600,
                        Description: CalculatorConst.Sql18SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "30752.00",
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
                        PricePerTier: "1426.00",
                    },
                    {
                        Name: CalculatorConst.Number100,
                        Description: CalculatorConst.Sql22SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2852.00",
                    },
                    {
                        Name: CalculatorConst.Number200,
                        Description: CalculatorConst.Sql23SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "5704.00",
                    },
                    {
                        Name: CalculatorConst.Number300,
                        Description: CalculatorConst.Sql24SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11408.00",
                    },
                    {
                        Name: CalculatorConst.Number400,
                        Description: CalculatorConst.Sql25SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "11408.00",
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
                        PricePerTier: "22816.00",
                    },
                    {
                        Name: CalculatorConst.Number1200,
                        Description: CalculatorConst.Sql27SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "34224.00",
                    },
                    {
                        Name: CalculatorConst.Number1600,
                        Description: CalculatorConst.Sql28SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "45632.00",
                    },
                    {
                        Name: CalculatorConst.Number2000,
                        Description: CalculatorConst.Sql29SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "57040.00",
                    },
                    {
                        Name: CalculatorConst.Number2500,
                        Description: CalculatorConst.Sql210SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "71300.00",
                    },
                    {
                        Name: CalculatorConst.Number3000,
                        Description: CalculatorConst.Sql211SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "85560.00",
                    }]
                }]
            },
            {
                Name: "高级 RS",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: CalculatorConst.Number125,
                        Description: CalculatorConst.Sql31SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2208.75",
                    },
                    {
                        Name: CalculatorConst.Number250,
                        Description: CalculatorConst.Sql32SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "4417.5",
                    },
                    {
                        Name: CalculatorConst.Number500,
                        Description: CalculatorConst.Sql33SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8835.00",
                    },
                    {
                        Name: CalculatorConst.Number1000,
                        Description: CalculatorConst.Sql34SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17670.00",
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
                        PricePerTier: "8835.00",
                    },
                    {
                        Name: CalculatorConst.Number250,
                        Description: CalculatorConst.Sql42SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "17670.00/",
                    },
                    {
                        Name: CalculatorConst.Number500,
                        Description: CalculatorConst.Sql43SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "35340.00",
                    },
                    {
                        Name: CalculatorConst.Number1000,
                        Description: CalculatorConst.Sql44SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "70680.00",
                    },
                    {
                        Name: CalculatorConst.Number1500,
                        Description: CalculatorConst.Sql45SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "106020.00",
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
                        PricePerTier: "141360.00",
                    },
                    {
                        Name: CalculatorConst.Number2500,
                        Description: CalculatorConst.Sql47SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "176700.00",
                    },
                    {
                        Name: CalculatorConst.Number3000,
                        Description: CalculatorConst.Sql48SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "212040.00",
                    },
                    {
                        Name: CalculatorConst.Number3500,
                        Description: CalculatorConst.Sql49SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "247380.00",
                    },
                    {
                        Name: CalculatorConst.Number4000,
                        Description: CalculatorConst.Sql410SizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "282720.00",
                    }]
                }]
            },
            {
                Name: "额外存储",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "标准",
                        Description: "额外存储 - 标准",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.5406",
                    },
                    {
                        Name: "高级和高级 RS",
                        Description: "额外存储 - 高级和高级 RS",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.0812",
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
                Name: "免费",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "使用时间上限为 500分钟",
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
                        Description: "无使用时间上限限制",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.01",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "分钟"
                    }]
                }]
            }]
        },
        
        
        "power-bi-embedded":{
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
            Name: "Redis 缓存",
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
        "hdinsight": {
            Name: "HDInsight",
            Types: [{
                Name: "A 系列",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
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
                    }, {
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
                }]
            },
            {
                Name: "D 系列",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
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
                ]
            }]
        },
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
                        PricePerTier: "2.03",
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
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                        PricePerTier: "2.03",
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
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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

        
        "hdinsight-linux-hbase-region": {
            Name: "HDInsight - Linux - Windows - HBase 群集 - 区域服务器",
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
                        PricePerTier: "2.03",
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
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                        PricePerTier: "1.01",
                    },
                    {
                        Name: CalculatorConst.A3Size,
                        Description: CalculatorConst.A3HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2.03",
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
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                Features: [{
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
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
        
        "hdinsight-linux-storm-supervisor": {
            Name: "HDInsight - Linux - Windows - Storm 群集 - 监管服务器",
            Types: [{
                Name: "标准",
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
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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

        "hdinsight-linux-storm-zookeeper": {
            Name: "HDInsight - Linux - Storm 群集 - Zookeeper 节点",
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
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
        
        "hdinsight-linux-spark-head": {
            Name: "HDInsight - Linux - Spark 群集 - 头节点",
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
                        PricePerTier: "2.03",
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
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
        
        "hdinsight-linux-spark-worker": {
            Name: "HDInsight - Linux - Spark 群集 - 工作进程节点",
            Types: [{
                Name: "标准",
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
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                        PricePerTier: "4.47",
                    },
                    {
                        Name: CalculatorConst.D4Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D5Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
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
                    MinUnit: "1",
                    MaxUnit: "1",
                    Sizes: [{
                        Name: CalculatorConst.D4V2Size,
                        Description: CalculatorConst.D4HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.94",
                    },
                    {
                        Name: CalculatorConst.D5V2Size,
                        Description: CalculatorConst.D5HDSizeDesc,
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.07",
                    },
                    {
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
                        PricePerTier: "0.272,0.266,0.24,0.203",
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
            Name: "备份",
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
                }, {
                    Name: "LRS 块 blob",
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
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.82,0.74,0.66",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
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
                }, {
                    Name: "LRS 块 blob",
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
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.82,0.74,0.66",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }
                ]
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
                },
              {
                  Name: "LRS 块 blob",
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
                        PriceTier: "0,1024,1025,51200,51201,512000",
                        PricePerTier: "0.82,0.74,0.66",
                        MinUnit: "0",
                        MaxUnit: "100000",
                        PriceUnit: "GB"
                    }]
                }
                ]
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
            }]
        },
        //"virtual-network": {
        //    Name: "虚拟网关",
        //    Types: [{
        //        Name: "default",
        //        Features: [{
        //            Name: "静态/动态路由 VPN 网关",
        //            PricePeriod: PricePeriodEnum.Monthly,
        //            PriceUnit: "个",
        //            MinUnit: "0",
        //            MaxUnit: "20",
        //            Sizes: [{
        //                Name: "default",
        //                Description: "静态/动态路由 VPN 网关",
        //                PriceTier: PriceTierEnum.Linear,
        //                PricePerTier: "186",
        //                MinUnit: "0",
        //                MaxUnit: "2000",
        //                PriceUnit: "个"
        //            }]
        //        },
        //        {
        //            Name: "高性能 VPN 网关",
        //            PricePeriod: PricePeriodEnum.Monthly,
        //            PriceUnit: "个",
        //            MinUnit: "0",
        //            MaxUnit: "20",
        //            Sizes: [{
        //                Name: "default",
        //                Description: "高性能 VPN 网关",
        //                PriceTier: PriceTierEnum.Linear,
        //                PricePerTier: "2328.72",
        //                MinUnit: "0",
        //                MaxUnit: "2000",
        //                PriceUnit: "个"
        //            }]
        //        },
        //        {
        //            Name: "传出 VNET 间数据传输",
        //            PricePeriod: PricePeriodEnum.Monthly,
        //            PriceUnit: "个",
        //            MinUnit: "0",
        //            MaxUnit: "20",
        //            Sizes: [{
        //                Name: "default",
        //                Description: "传出 VNET 间数据传输",
        //                PriceTier: PriceTierEnum.Linear,
        //                PricePerTier: "0.16",
        //                MinUnit: "0",
        //                MaxUnit: "2000",
        //                PriceUnit: "GB"
        //            }]
        //        }]
        //    }]
        //},
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
        "virtual-network": {
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
                }]
            }]
        },
        
        
        "virtual-network-data-transfer": {
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
            Types: [{
                Name: "default",
                Features: [
                {
                    Name: "公共 IP 地址 - 动态",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "小时",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "公共 IP 地址 - 动态 ¥0.026/IP/小时*744小时",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.026",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]
                },
                {
                    Name: "公共 IP 地址 - 静态",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "小时",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "0-5，¥0.026/IP/小时*744小时，第 6 个开始 ¥0.052/IP/小时*744小时",
                        PriceTier: "0,5,6,1000",
                        PricePerTier: "0.026,0.052",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]
                },
                {
                    Name: "云服务 VIP",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "小时",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "第 1 个免费，云服务 VIP ¥0.026/IP/小时*744小时",
                        PriceTier: "0,1,2,1000",
                        PricePerTier: "0,0.026",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]
                },
                {
                    Name: "IP 地址 - 保留的 IP 地址",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "小时",
                    MinUnit: "0",
                    MaxUnit: "1000",
                    Sizes: [{
                        Name: "default",
                        Description: "0-5免费 超过6个¥0.026 /IP/小时*744小时",
                        PriceTier: "0,5,6,1000",
                        PricePerTier: "0,0.026",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]
                },
                {
                    Name: "IP 地址 - 实例层级 IP 地址",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "小时",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "default",
                        Description: "实例层级 IP 地址 ¥0.026/IP/小时*744小时",
                        PriceTier: PriceTierEnum.Linear,
                        PricePerTier: "0.026",
                        MinUnit: "0",
                        MaxUnit: "1000",
                        PriceUnit: "个"
                    }]
                },
                {
                     Name: "IP 地址 - IP 地址重新映射",
                     PricePeriod: PricePeriodEnum.Monthly,
                     PriceUnit: "小时",
                     MinUnit: "0",
                     MaxUnit: "1000",
                     Sizes: [{
                         Name: "default",
                         Description: " 0-100免费 之后￥0.456/重新映射*744小时",
                         PriceTier: "0,100,101,1000",
                         PricePerTier: "0,0.456",
                         MinUnit: "0",
                         MaxUnit: "1000",
                         PriceUnit: "个"
                     }]
                 }]
            }]
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
        
         "networking-inbound": {
            Name: "虚拟网络对等互连 (VNET Peering) - 入站数据传输",
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
                        PricePerTier: "0.06572",
                        MinUnit: "0",
                        MaxUnit: "2000",
                        PriceUnit: "GB"
                    }]
                }]
            }]
        },
        
         "networking-outbound": {
            Name: "虚拟网络对等互连 (VNET Peering) - 出站数据传输",
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
                        PricePerTier: "0.06572",
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
                    Name: "证书续订",
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
                }]
            }]
        },
        
        "sql-data-warehouse": {
            Name: "SQL 数据仓库",
            Types: [{
                Name: "小于等于 600",
                Features: [{
                    Name: "DWU",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "100",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "8.05",
                    },
                    {
                        Name: "200",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "16.1",
                    },
                    {
                        Name: "300",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "24.15",
                    },
                    {
                        Name: "400",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "32.2",
                    },
                    {
                        Name: "500",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "40.25",
                    },
                    {
                        Name: "600",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "48.3",
                    }]
                }]
            },
            {
                Name: "大于等于 1000",
                Features: [{
                    Name: "DWU",
                    PricePeriod: PricePeriodEnum.Hourly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "20",
                    Sizes: [{
                        Name: "1000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "80.5",
                    },
                    {
                        Name: "1200",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "96.6",
                    },
                    {
                        Name: "1500",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "120.75",
                    },
                    {
                        Name: "2000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "161",
                    },
                    {
                        Name: "3000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "241.5",
                    },
                    {
                        Name: "6000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "483",
                    }]
                }]
            }]
        },


        "azure-iot-hub": {
            Name: "Azure IoT 中心",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "消费总数每天为 8000，消费计算大小为 0.5KB",
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
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "消费总数每天为 400000，消费计算大小为 4KB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "388",
                    }]
                }]
            },
            {
                Name: "S2",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
                        Description: "消费总数每天为 6000000，消费计算大小为 4KB",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "3888",
                    }]
                }]
            },
            {
                Name: "S3",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "100",
                    Sizes: [{
                        Name: "default",
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
                    },
                    {
                        Name: "3000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "675.3",
                    },
                    {
                        Name: "6000",
                        Description: "",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1350.6",
                    }]
                }]
            }]
        },
        
 
       "cognitive-services-face": {
            Name: "认知服务 - 人脸识别 API",
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
                    MaxUnit: "100000",
                    Sizes: [{
                        Name: "default",
                        Description: "default",
                        PriceTier: "0,1000,1001,5000,5001,20000",
                        PricePerTier: "9.54,6.996,4.134",
                        MinUnit: "0",
                        MaxUnit: "100000",
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
                        PricePerTier: "3.18",
                    }]
                }]
            }]
        },
        
        "cognitive-services-emotion": {
            Name: "认知服务 - 情绪识别 API",
            Types: [{
                Name: "免费",
                Features: [{
                    Name: "default",
                    Sizes: [{
                        Name: "default",
                        Description: "每月 30,000 个免费事务，3,000 个状态查询/每月（限制为 5 个/分钟）",
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
                    PriceUnit: "千个事务",
                    MinUnit: "0",
                    MaxUnit: "100000",
                    Sizes: [{
                        Name: "default",
                        Description: "每秒最多 10 个事务 （指定的面部矩形）",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "0.75",
                    }]
                }]
            },
            {
                Name: "标准",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "千个事务",
                    MinUnit: "0",
                    MaxUnit: "100000",
                    Sizes: [{
                        Name: "default",
                        Description: "每秒最多 10 个事务",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "1.85",
                    }]
                }]
            }]
        },

       "cognitive-services-computer-vision": {
            Name: "认知服务 - 计算机视觉 API",
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
        "api-management": {
            Name: "API 管理",
            Types: [{
                Name: "开发人员",
                Features: [{
                    Name: "default",
                    PricePeriod: PricePeriodEnum.Monthly,
                    PriceUnit: "个",
                    MinUnit: "0",
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "开发人员层",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "162.44",
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
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "标准层",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "2299.89",
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
                    MaxUnit: "2000",
                    Sizes: [{
                        Name: "default",
                        Description: "高级层",
                        PriceTier: PriceTierEnum.Fixed,
                        PricePerTier: "9362.62",
                    }]
                }]
            }]
        }
    }
};
//  return CalculatorData;
//});

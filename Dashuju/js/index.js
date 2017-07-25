/**
 * Created by Administrator on 2017/4/19.
 */
function baseMap(){


    // 左上方三大产业生产总量示例图
    $.get('http://localhost:63342/GuiYangnew/GuiYangnew/GuiYang/js/data1.json').done(function (data) {
        var myChart1 = echarts.init(document.getElementById('leftpartTop'));
        var option1 = {
        title : {
            text: '生产总量',
            padding:[30,0,0,0],
            x:'center',
            textStyle:{
                color:'#eaedf0'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show: true,
            feature: {
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        color:['#c23531','#61a0a8','#d48265'],
        legend: {
            orient: 'vertical',
            left: '5%',
            bottom: '5%',
            data: ['第一产业','第二产业','第三产业'],
            //data:data.categories,
            textStyle:{
                color:'#eaedf0'
            }
        },
        series : [
            {
                name: '三大产业占比',
                //name: data.name,
                type: 'pie',
                radius : '50%',
                center: ['50%', '52%'],
                //data:[
                //    {value:50, name:'第一产业'},
                //    {value:400, name:'第二产业'},
                //    {value:100, name:'第三产业'}
                //],
                data:data.data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
        myChart1.setOption(option1);
        window.addEventListener("resize",function(){
            myChart1.resize();
        });
    });


    //左下方脱贫人数仪表盘示例图
    $.get('http://localhost:63342/GuiYangnew/GuiYangnew/GuiYang/js/data3.json').done(function (data){
        var myChart6 = echarts.init(document.getElementById('leftpartBot'));
        var option6 = {
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize :10,   //控制仪表盘上面显示刻度的字体大小
                    color: '#444'
                },
                formatter:'{value}万'  //给仪表盘上面的刻度加单位
            },
            title : {
                text: '脱贫人数',    //大标题的字体大小及样式
                //text:data.title,
                padding: [30, 0, 0, 0],
                x: 'center',
                textStyle: {
                    color: '#eaedf0'
                }
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}万"
            },
            toolbox: {
                show: true,
                feature: {
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '脱贫人数',
                    //name:data.name,
                    type: 'gauge',
                    min: 0,
                    max: 1,
                    title: {
                        textStyle: {
                            fontSize :12,
                            color: '#eaedf0'
                        }
                    },
                    radius : '70%',
                    center: ['50%', '60%'],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 23
                        }
                    },
                    detail: {formatter:'{value}万',
                        textStyle: {
                            fontSize :20,
                            fontWeight: 'bolder'
                        }
                    },
                    //data: [{value: 20, name: '脱贫人数'}],这里的脱贫人数是仪表盘中间指针位置的标题
                    //data: [{value: 20}],
                    data:data.data,
                    textStyle:{
                        color:'#fff'
                    }
                }
            ]
        };
        setInterval(function () {
            option6.series[0].data[0].value = (Math.random() * 1).toFixed(2) - 0;
            myChart6.setOption(option6, true);
        },2000);
        myChart6.setOption(option6);
        window.addEventListener("resize",function(){
            myChart6.resize();
        });
    });


    //右上方访问调研示例图
    //$.get('http://localhost:63342/GuiYang/js/data2.json').done(function (data){
    //    var myChart2 = echarts.init(document.getElementById('rightpartTop'));
    //    var option2={
    //        title : {
    //            text: '访问调研',
    //            padding:[30,0,0,0],
    //            x:'52%',
    //            textStyle:{
    //                color:'#eaedf0'
    //            }
    //        },
    //        tooltip: {
    //            trigger: 'item',
    //            formatter: "{a} <br/>{b}: {c} ({d}%)"
    //        },
    //        toolbox: {
    //            show: true,
    //            feature: {
    //                restore: {show: true},
    //                saveAsImage: {show: true}
    //            }
    //        },
    //        color:['#cbced1','#c23531','#61a0a8','#d48265','#91c7ae'],
    //        legend: {
    //            orient: 'vertical',
    //            left: '5%',
    //            bottom: '5%',
    //            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
    //            //data:data.categories,
    //            textStyle:{
    //                color:'#eaedf0'
    //            }
    //        },
    //        series: [
    //            {
    //                name:'访问来源',
    //                //name:data.name,
    //                type:'pie',
    //                radius: ['35%', '55%'],
    //                center: ['60%', '55%'],
    //                avoidLabelOverlap: false,
    //                label: {
    //                    normal: {
    //                        show: false,
    //                        position: 'center'
    //                    },
    //                    emphasis: {
    //                        show: true,
    //                        textStyle: {
    //                            fontSize: '30',
    //                            fontWeight: 'bold'
    //                        }
    //                    }
    //                },
    //                labelLine: {
    //                    normal: {
    //                        show: false
    //                    }
    //                },
    //                //data:[
    //                //    {value:335, name:'直接访问'},
    //                //    {value:310, name:'邮件营销'},
    //                //    {value:234, name:'联盟广告'},
    //                //    {value:135, name:'视频广告'},
    //                //    {value:1548, name:'搜索引擎'}
    //                //]
    //                data:data.data
    //            }
    //        ]
    //    };
    //    myChart2.setOption(option2);
    //    window.addEventListener("resize",function(){
    //        myChart2.resize();
    //    });
    //});


    // 右下方电商企业实例图
    $.get('http://localhost:63342/GuiYangnew/GuiYangnew/GuiYang/js/data5.json').done(function (data) {
        var myChart3 = echarts.init(document.getElementById('rightpartBot'));
        var option3 = {
            title: {
                text: '电商企业',
                //text: data.title,
                padding: [30, 0, 0, 0],
                x: 'center',
                textStyle: {
                    color: '#eaedf0'
                }
            },
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            toolbox: {
                show: true,
                feature: {
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '电商企业',
                    //name:data.nameYou,
                    type: 'gauge',
                    center: ['50%', '58%'],    // 默认全局居中
                    radius: '60%',
                    min: 0,
                    max: 200,
                    startAngle: 135,
                    endAngle:45,
                    //startAngle:data.gasStartAngle,
                    //endAngle: data.gasEndAngle,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 15
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 15,
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        formatter: function (v) {
                            switch (v + '') {
                                case '0' :
                                    return '0个';
                                case '100' :
                                    return '100个';
                                case '200' :
                                    return '200个';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 5
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    //data: [{value: 0.5, name: 'gas'}]
                    data:data.dataYou
                },
                {
                    name: '销售额',
                    //name:data.nameWater,
                    type: 'gauge',
                    center: ['50%', '58%'],    // 默认全局居中
                    radius: '60%',
                    min: 0,
                    max: 2,
                    //startAngle:data.waterStartAngle,
                    //endAngle: data.waterEndAngle,
                    startAngle: 315,
                    endAngle: 225,
                    splitNumber: 2,         //分隔数
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 15
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {
                        formatter: function (v) {
                            switch (v + '') {
                                case '0' :
                                    return '0亿';
                                case '1' :
                                    return '1亿';
                                case '2' :
                                    return '2亿';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 5
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    //data: [{value: 0.5, name: 'gas'}]
                    data:data.dataWater
                }
            ]
        };
        setInterval(function () {
            option3.series[0].data[0].value = (Math.random() * 200).toFixed(2) - 0;
            option3.series[1].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            myChart3.setOption(option3, true);
        },2000);
        myChart3.setOption(option3);
        window.addEventListener("resize", function () {
            myChart3.resize();
        });
    });


   //中间上方全国空气质量实例图
    $.get('http://localhost:63342/GuiYangnew/GuiYangnew/GuiYang/js/data6.json', function (data) {
        //var data = [
        //    {name: '海门', value: 9},
        //    {name: '鄂尔多斯', value: 12},
        //    {name: '招远', value: 12},
        //    {name: '舟山', value: 12},
        //    {name: '齐齐哈尔', value: 14},
        //    {name: '盐城', value: 15},
        //    {name: '赤峰', value: 16},
        //    {name: '青岛', value: 18},
        //    {name: '乳山', value: 18},
        //    {name: '金昌', value: 19},
        //    {name: '泉州', value: 21},
        //    {name: '莱西', value: 21},
        //    {name: '日照', value: 21},
        //    {name: '胶南', value: 22},
        //    {name: '南通', value: 23},
        //    {name: '拉萨', value: 24},
        //    {name: '云浮', value: 24},
        //    {name: '梅州', value: 25},
        //    {name: '文登', value: 25},
        //    {name: '上海', value: 25},
        //    {name: '攀枝花', value: 25},
        //    {name: '威海', value: 25},
        //    {name: '承德', value: 25},
        //    {name: '厦门', value: 26},
        //    {name: '汕尾', value: 26},
        //    {name: '潮州', value: 26},
        //    {name: '丹东', value: 27},
        //    {name: '太仓', value: 27},
        //    {name: '曲靖', value: 27},
        //    {name: '烟台', value: 28},
        //    {name: '福州', value: 29},
        //    {name: '瓦房店', value: 30},
        //    {name: '即墨', value: 30},
        //    {name: '抚顺', value: 31},
        //    {name: '玉溪', value: 31},
        //    {name: '张家口', value: 31},
        //    {name: '阳泉', value: 31},
        //    {name: '莱州', value: 32},
        //    {name: '湖州', value: 32},
        //    {name: '汕头', value: 32},
        //    {name: '昆山', value: 33},
        //    {name: '宁波', value: 33},
        //    {name: '湛江', value: 33},
        //    {name: '揭阳', value: 34},
        //    {name: '荣成', value: 34},
        //    {name: '连云港', value: 35},
        //    {name: '葫芦岛', value: 35},
        //    {name: '常熟', value: 36},
        //    {name: '东莞', value: 36},
        //    {name: '河源', value: 36},
        //    {name: '淮安', value: 36},
        //    {name: '泰州', value: 36},
        //    {name: '南宁', value: 37},
        //    {name: '营口', value: 37},
        //    {name: '惠州', value: 37},
        //    {name: '江阴', value: 37},
        //    {name: '蓬莱', value: 37},
        //    {name: '韶关', value: 38},
        //    {name: '嘉峪关', value: 38},
        //    {name: '广州', value: 38},
        //    {name: '延安', value: 38},
        //    {name: '太原', value: 39},
        //    {name: '清远', value: 39},
        //    {name: '中山', value: 39},
        //    {name: '昆明', value: 39},
        //    {name: '寿光', value: 40},
        //    {name: '盘锦', value: 40},
        //    {name: '长治', value: 41},
        //    {name: '深圳', value: 41},
        //    {name: '珠海', value: 42},
        //    {name: '宿迁', value: 43},
        //    {name: '咸阳', value: 43},
        //    {name: '铜川', value: 44},
        //    {name: '平度', value: 44},
        //    {name: '佛山', value: 44},
        //    {name: '海口', value: 44},
        //    {name: '江门', value: 45},
        //    {name: '章丘', value: 45},
        //    {name: '肇庆', value: 46},
        //    {name: '大连', value: 47},
        //    {name: '临汾', value: 47},
        //    {name: '吴江', value: 47},
        //    {name: '石嘴山', value: 49},
        //    {name: '沈阳', value: 50},
        //    {name: '苏州', value: 50},
        //    {name: '茂名', value: 50},
        //    {name: '嘉兴', value: 51},
        //    {name: '长春', value: 51},
        //    {name: '胶州', value: 52},
        //    {name: '银川', value: 52},
        //    {name: '张家港', value: 52},
        //    {name: '三门峡', value: 53},
        //    {name: '锦州', value: 54},
        //    {name: '南昌', value: 54},
        //    {name: '柳州', value: 54},
        //    {name: '三亚', value: 54},
        //    {name: '自贡', value: 56},
        //    {name: '吉林', value: 56},
        //    {name: '阳江', value: 57},
        //    {name: '泸州', value: 57},
        //    {name: '西宁', value: 57},
        //    {name: '宜宾', value: 58},
        //    {name: '呼和浩特', value: 58},
        //    {name: '成都', value: 58},
        //    {name: '大同', value: 58},
        //    {name: '镇江', value: 59},
        //    {name: '桂林', value: 59},
        //    {name: '张家界', value: 59},
        //    {name: '宜兴', value: 59},
        //    {name: '北海', value: 60},
        //    {name: '西安', value: 61},
        //    {name: '金坛', value: 62},
        //    {name: '东营', value: 62},
        //    {name: '牡丹江', value: 63},
        //    {name: '遵义', value: 63},
        //    {name: '绍兴', value: 63},
        //    {name: '扬州', value: 64},
        //    {name: '常州', value: 64},
        //    {name: '潍坊', value: 65},
        //    {name: '重庆', value: 66},
        //    {name: '台州', value: 67},
        //    {name: '南京', value: 67},
        //    {name: '滨州', value: 70},
        //    {name: '贵阳', value: 71},
        //    {name: '无锡', value: 71},
        //    {name: '本溪', value: 71},
        //    {name: '克拉玛依', value: 72},
        //    {name: '渭南', value: 72},
        //    {name: '马鞍山', value: 72},
        //    {name: '宝鸡', value: 72},
        //    {name: '焦作', value: 75},
        //    {name: '句容', value: 75},
        //    {name: '北京', value: 79},
        //    {name: '徐州', value: 79},
        //    {name: '衡水', value: 80},
        //    {name: '包头', value: 80},
        //    {name: '绵阳', value: 80},
        //    {name: '乌鲁木齐', value: 84},
        //    {name: '枣庄', value: 84},
        //    {name: '杭州', value: 84},
        //    {name: '淄博', value: 85},
        //    {name: '鞍山', value: 86},
        //    {name: '溧阳', value: 86},
        //    {name: '库尔勒', value: 86},
        //    {name: '安阳', value: 90},
        //    {name: '开封', value: 90},
        //    {name: '济南', value: 92},
        //    {name: '德阳', value: 93},
        //    {name: '温州', value: 95},
        //    {name: '九江', value: 96},
        //    {name: '邯郸', value: 98},
        //    {name: '临安', value: 99},
        //    {name: '兰州', value: 99},
        //    {name: '沧州', value: 100},
        //    {name: '临沂', value: 103},
        //    {name: '南充', value: 104},
        //    {name: '天津', value: 105},
        //    {name: '富阳', value: 106},
        //    {name: '泰安', value: 112},
        //    {name: '诸暨', value: 112},
        //    {name: '郑州', value: 113},
        //    {name: '哈尔滨', value: 114},
        //    {name: '聊城', value: 116},
        //    {name: '芜湖', value: 117},
        //    {name: '唐山', value: 119},
        //    {name: '平顶山', value: 119},
        //    {name: '邢台', value: 119},
        //    {name: '德州', value: 120},
        //    {name: '济宁', value: 120},
        //    {name: '荆州', value: 127},
        //    {name: '宜昌', value: 130},
        //    {name: '义乌', value: 132},
        //    {name: '丽水', value: 133},
        //    {name: '洛阳', value: 134},
        //    {name: '秦皇岛', value: 136},
        //    {name: '株洲', value: 143},
        //    {name: '石家庄', value: 147},
        //    {name: '莱芜', value: 148},
        //    {name: '常德', value: 152},
        //    {name: '保定', value: 153},
        //    {name: '湘潭', value: 154},
        //    {name: '金华', value: 157},
        //    {name: '岳阳', value: 169},
        //    {name: '长沙', value: 175},
        //    {name: '衢州', value: 177},
        //    {name: '廊坊', value: 193},
        //    {name: '菏泽', value: 194},
        //    {name: '合肥', value: 229},
        //    {name: '武汉', value: 273},
        //    {name: '大庆', value: 279}
        //];
        var geoCoordMap = {
            '海门':[121.15,31.89],
            '鄂尔多斯':[109.781327,39.608266],
            '招远':[120.38,37.35],
            '舟山':[122.207216,29.985295],
            '齐齐哈尔':[123.97,47.33],
            '盐城':[120.13,33.38],
            '赤峰':[118.87,42.28],
            '青岛':[120.33,36.07],
            '乳山':[121.52,36.89],
            '金昌':[102.188043,38.520089],
            '泉州':[118.58,24.93],
            '莱西':[120.53,36.86],
            '日照':[119.46,35.42],
            '胶南':[119.97,35.88],
            '南通':[121.05,32.08],
            '拉萨':[91.11,29.97],
            '云浮':[112.02,22.93],
            '梅州':[116.1,24.55],
            '文登':[122.05,37.2],
            '上海':[121.48,31.22],
            '攀枝花':[101.718637,26.582347],
            '威海':[122.1,37.5],
            '承德':[117.93,40.97],
            '厦门':[118.1,24.46],
            '汕尾':[115.375279,22.786211],
            '潮州':[116.63,23.68],
            '丹东':[124.37,40.13],
            '太仓':[121.1,31.45],
            '曲靖':[103.79,25.51],
            '烟台':[121.39,37.52],
            '福州':[119.3,26.08],
            '瓦房店':[121.979603,39.627114],
            '即墨':[120.45,36.38],
            '抚顺':[123.97,41.97],
            '玉溪':[102.52,24.35],
            '张家口':[114.87,40.82],
            '阳泉':[113.57,37.85],
            '莱州':[119.942327,37.177017],
            '湖州':[120.1,30.86],
            '汕头':[116.69,23.39],
            '昆山':[120.95,31.39],
            '宁波':[121.56,29.86],
            '湛江':[110.359377,21.270708],
            '揭阳':[116.35,23.55],
            '荣成':[122.41,37.16],
            '连云港':[119.16,34.59],
            '葫芦岛':[120.836932,40.711052],
            '常熟':[120.74,31.64],
            '东莞':[113.75,23.04],
            '河源':[114.68,23.73],
            '淮安':[119.15,33.5],
            '泰州':[119.9,32.49],
            '南宁':[108.33,22.84],
            '营口':[122.18,40.65],
            '惠州':[114.4,23.09],
            '江阴':[120.26,31.91],
            '蓬莱':[120.75,37.8],
            '韶关':[113.62,24.84],
            '嘉峪关':[98.289152,39.77313],
            '广州':[113.23,23.16],
            '延安':[109.47,36.6],
            '太原':[112.53,37.87],
            '清远':[113.01,23.7],
            '中山':[113.38,22.52],
            '昆明':[102.73,25.04],
            '寿光':[118.73,36.86],
            '盘锦':[122.070714,41.119997],
            '长治':[113.08,36.18],
            '深圳':[114.07,22.62],
            '珠海':[113.52,22.3],
            '宿迁':[118.3,33.96],
            '咸阳':[108.72,34.36],
            '铜川':[109.11,35.09],
            '平度':[119.97,36.77],
            '佛山':[113.11,23.05],
            '海口':[110.35,20.02],
            '江门':[113.06,22.61],
            '章丘':[117.53,36.72],
            '肇庆':[112.44,23.05],
            '大连':[121.62,38.92],
            '临汾':[111.5,36.08],
            '吴江':[120.63,31.16],
            '石嘴山':[106.39,39.04],
            '沈阳':[123.38,41.8],
            '苏州':[120.62,31.32],
            '茂名':[110.88,21.68],
            '嘉兴':[120.76,30.77],
            '长春':[125.35,43.88],
            '胶州':[120.03336,36.264622],
            '银川':[106.27,38.47],
            '张家港':[120.555821,31.875428],
            '三门峡':[111.19,34.76],
            '锦州':[121.15,41.13],
            '南昌':[115.89,28.68],
            '柳州':[109.4,24.33],
            '三亚':[109.511909,18.252847],
            '自贡':[104.778442,29.33903],
            '吉林':[126.57,43.87],
            '阳江':[111.95,21.85],
            '泸州':[105.39,28.91],
            '西宁':[101.74,36.56],
            '宜宾':[104.56,29.77],
            '呼和浩特':[111.65,40.82],
            '成都':[104.06,30.67],
            '大同':[113.3,40.12],
            '镇江':[119.44,32.2],
            '桂林':[110.28,25.29],
            '张家界':[110.479191,29.117096],
            '宜兴':[119.82,31.36],
            '北海':[109.12,21.49],
            '西安':[108.95,34.27],
            '金坛':[119.56,31.74],
            '东营':[118.49,37.46],
            '牡丹江':[129.58,44.6],
            '遵义':[106.9,27.7],
            '绍兴':[120.58,30.01],
            '扬州':[119.42,32.39],
            '常州':[119.95,31.79],
            '潍坊':[119.1,36.62],
            '重庆':[106.54,29.59],
            '台州':[121.420757,28.656386],
            '南京':[118.78,32.04],
            '滨州':[118.03,37.36],
            '贵阳':[106.71,26.57],
            '无锡':[120.29,31.59],
            '本溪':[123.73,41.3],
            '克拉玛依':[84.77,45.59],
            '渭南':[109.5,34.52],
            '马鞍山':[118.48,31.56],
            '宝鸡':[107.15,34.38],
            '焦作':[113.21,35.24],
            '句容':[119.16,31.95],
            '北京':[116.46,39.92],
            '徐州':[117.2,34.26],
            '衡水':[115.72,37.72],
            '包头':[110,40.58],
            '绵阳':[104.73,31.48],
            '乌鲁木齐':[87.68,43.77],
            '枣庄':[117.57,34.86],
            '杭州':[120.19,30.26],
            '淄博':[118.05,36.78],
            '鞍山':[122.85,41.12],
            '溧阳':[119.48,31.43],
            '库尔勒':[86.06,41.68],
            '安阳':[114.35,36.1],
            '开封':[114.35,34.79],
            '济南':[117,36.65],
            '德阳':[104.37,31.13],
            '温州':[120.65,28.01],
            '九江':[115.97,29.71],
            '邯郸':[114.47,36.6],
            '临安':[119.72,30.23],
            '兰州':[103.73,36.03],
            '沧州':[116.83,38.33],
            '临沂':[118.35,35.05],
            '南充':[106.110698,30.837793],
            '天津':[117.2,39.13],
            '富阳':[119.95,30.07],
            '泰安':[117.13,36.18],
            '诸暨':[120.23,29.71],
            '郑州':[113.65,34.76],
            '哈尔滨':[126.63,45.75],
            '聊城':[115.97,36.45],
            '芜湖':[118.38,31.33],
            '唐山':[118.02,39.63],
            '平顶山':[113.29,33.75],
            '邢台':[114.48,37.05],
            '德州':[116.29,37.45],
            '济宁':[116.59,35.38],
            '荆州':[112.239741,30.335165],
            '宜昌':[111.3,30.7],
            '义乌':[120.06,29.32],
            '丽水':[119.92,28.45],
            '洛阳':[112.44,34.7],
            '秦皇岛':[119.57,39.95],
            '株洲':[113.16,27.83],
            '石家庄':[114.48,38.03],
            '莱芜':[117.67,36.19],
            '常德':[111.69,29.05],
            '保定':[115.48,38.85],
            '湘潭':[112.91,27.87],
            '金华':[119.64,29.12],
            '岳阳':[113.09,29.37],
            '长沙':[113,28.21],
            '衢州':[118.88,28.97],
            '廊坊':[116.7,39.53],
            '菏泽':[115.480656,35.23375],
            '合肥':[117.27,31.86],
            '武汉':[114.31,30.52],
            '大庆':[125.03,46.58]
        };
        var myChart5 = echarts.init(document.getElementById('middlepartTop'));
        //数据拼接函数
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        var option5 = {
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
                text: '全国主要城市空气质量',
                subtext: 'data from PM25.in',   //副标题
                sublink: 'http://www.pm25.in',  //副标题超文本链接
                left: 'center',
                padding:[20,0,0,0],
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item'
            },
            toolbox: {
                show: true,
                feature: {
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x:'right',
                data:['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series : [
                {
                    name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#408909'
                        }
                    }
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 6)),
                    symbolSize: function (val) {  //图中每个地区点的大小
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#5fc413',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }
            ]
        };
        myChart5.setOption(option5);
        window.addEventListener("resize",function(){
            myChart5.resize();
        });

    });


    //中间下方一年降水量及温度折柱图
    $.get('http://localhost:63342/GuiYangnew/GuiYangnew/GuiYang/js/data4.json').done(function (data){
        var myChart4 = echarts.init(document.getElementById('middlepartBot'));
        var option4 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#eaedf0'
                    }
                }
            },
            toolbox: {
                feature: {
                    //dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true},
                    textStyle:{
                        color:'#eaedf0'
                    }
                }
            },
            legend: {
                data:['降水量','平均温度'],
                //data:data.title,
                textStyle:{
                    color:'#eaedf0'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    //data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    data:data.month,
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#b3b0ae'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#77d8ed'//坐标值得具体的颜色

                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    //name:data.leftY,
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLine:{
                        lineStyle:{
                            color:'#b3b0ae'
                        }
                    },
                    axisLabel: {
                        formatter: '{value} ml',
                        textStyle: {
                            color: '#77d8ed'//坐标值得具体的颜色

                        }
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    //name:data.rightY,
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLine:{
                        lineStyle:{
                            color:'#b3b0ae'
                        }
                    },
                    axisLabel: {
                        formatter: '{value} °C',
                        textStyle: {
                            color: '#77d8ed'//坐标值得具体的颜色

                        }
                    }
                }
            ],
            series: [
                {
                    name:'降水量',
                    //name:data.waterName,
                    type:'bar',
                    //data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    data:data.water,
                    itemStyle: {
                        //通常情况下：
                        normal: {
                            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                            color: function (params) {
                                var colorList = ['#c23531'];
                                return colorList[params.dataIndex];
                            }
                        }
                    }
                },
                {
                    name:'平均温度',
                    //name:data.temperatureName,
                    type:'line',
                    itemStyle : {
                        normal : {
                            lineStyle:{
                                color:'#61a0a8'
                            }
                        }
                    },
                    yAxisIndex: 1,
                    //data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    data:data.temperature
                }
            ]
        };
        myChart4.setOption(option4);
        window.addEventListener("resize",function(){
            myChart4.resize();
        });
    });

}
baseMap();
(function () {
    window.Draggable = function (parentElement, config) {
        /**
         * 拖拽类型
         */
        const draggableType = {
            /**
             * 叠加
             */
            SUPERIMPOSE: 0,
            /**
             * 替换
             */
            REPLACE: 1,
            /**
             * 插入(未实现)
             */
            INSERT: 2,
        };

        /**
         * 数据模式
         */
        const dataModel = {
            WINDOW: 0,
            OBJECT: 1
        }

        if (!parentElement) {
            console.log('必须传入：parentElement')
            return
        }
        if (!config) {
            config = {}
        }

        if (!config.key) {
            config.key = draggableType.REPLACE
        }

        if (!config.draggableType) {
            config.draggableType = draggableType.REPLACE
        }

        if (!config.dataModel) {
            config.dataModel = dataModel.WINDOW
        }

        if (!config.itemList || !config.itemList.length) {
            config.itemList = [
                {
                    key: "dp1",
                    draggable: {
                        key: 1,
                        name: "名称1",
                        //拖拽启动
                        ondragstart: (e, data) => {
                        },
                        ondrag: (e) => {
                        },
                        //拖拽结束
                        ondragend: (e) => {
                        },
                        date: {}
                    },
                    ondragenter: (e) => {
                    },
                    ondragover: (e) => {
                    },
                    ondragleave: (e) => {
                    },
                    ondrop: (e) => {
                    },
                },
                {
                    key: "dp2",
                    ondragenter: (e) => {
                    },
                    ondragover: (e) => {
                    },
                    ondragleave: (e) => {
                    },
                    ondrop: (e) => {
                    },
                },
                {
                    key: "dp3",
                    ondragenter: (e) => {
                    },
                    ondragover: (e) => {
                    },
                    ondragleave: (e) => {
                    },
                    ondrop: (e) => {
                    },
                },
                {
                    key: "dp4",
                    draggable: {
                        key: "4",
                        name: "名称4",
                        //拖拽启动
                        ondragstart: (e) => {
                        },
                        //拖拽结束
                        ondragend: (e) => {
                        },
                        date: {}
                    },
                    ondragenter: (e) => {
                    },
                    ondragover: (e) => {
                    },
                    ondragleave: (e) => {
                    },
                    ondrop: (e) => {
                    },
                },

            ]
        }


        // 在拖动目标上触发事件 (源元素):
        // ondragstart - 用户开始拖动元素时触发
        // ondrag - 元素正在拖动时触发
        // ondragend - 用户完成元素拖动后触发
        //
        // 释放目标时触发的事件:
        // ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件
        // ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
        // ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件
        // ondrop - 在一个拖动过程中，释放鼠标键时触发此事件


        console.log('开始创建')


        if (config.dataModel === dataModel.WINDOW) {
            window.draggableData = {
                selected_draggable: null,
                selected_droppable: null,
                target_droppable: null
            }
        }
        const draggableData = {
            selected_draggable: null,
            selected_droppable: null,
            target_droppable: null
        }

        const mainDivDom = document.createElement('div');
        mainDivDom.className = 'xyzs-draggable-tool'

        for (let i = 0; i < config.itemList.length; i++) {
            let droppable = config.itemList[i];

            console.log('开始创建容器' + i)
            //容器
            const droppableDiv = document.createElement('div');
            droppableDiv.className = 'xyzs-droppable xyzs-droppable-' + droppable.key

            //被拖动的对象在对象容器范围内拖动时
            droppableDiv.addEventListener('dragover', (e) => {
                // console.log('被拖动的对象在对象容器范围内拖动时')
                if (droppable.ondragover) {
                    droppable.ondragover(e, droppable.data)
                }
                e.preventDefault();
                e.stopPropagation();
            });
            //被拖动的对象离开容器范围内时
            droppableDiv.addEventListener('dragleave', (e) => {
                //e.target： 先拖动对象，然后是容器
                console.log('被拖动的对象离开容器范围内时', e.target.className)
                if (droppable.ondragleave) {
                    droppable.ondragleave(e, droppable.data)
                }
                e.preventDefault();
                e.stopPropagation();
                droppableDiv.classList.remove("xyzs-drag-over");
            });
            //被拖动的对象进入其容器范围内时
            droppableDiv.addEventListener('dragenter', (e) => {
                //e.target： 先拖动对象，然后是容器
                console.log('被拖动的对象进入其容器范围内时', e.target.className)
                if (droppable.ondragenter) {
                    droppable.ondragenter(e, droppable.data)
                }
                e.preventDefault();
                e.stopPropagation();
                droppableDiv.classList.add("xyzs-drag-over");
            });
            //拖动过程中，释放鼠标键时
            droppableDiv.addEventListener('drop', (e) => {
                //e.target 目标容器
                console.log('释放鼠标键时', e)
                if (droppable.ondrop) {
                    droppable.ondrop(e, droppable.data)
                }
                droppableDiv.classList.remove("xyzs-drag-over");
                if (config.dataModel === dataModel.WINDOW) {
                    window.draggableData.target_droppable = droppableDiv
                } else {
                    draggableData.target_droppable = droppableDiv
                }
            });


            // === 创建可拖拽元素 ===
            if (droppable.draggable) {
                let draggable = droppable.draggable;
                //可拖拽元素
                const draggableDiv = document.createElement('div');
                draggableDiv.className = 'xyzs-draggable xyzs-draggable-' + draggable.key;
                //开始拖拽
                draggableDiv.addEventListener('dragstart', (e) => {
                    console.log("开始拖拽")
                    if (draggable.ondragstart) {
                        draggable.ondragstart(e, draggable.data);
                    }

                    if (config.dataModel === dataModel.WINDOW) {
                        window.draggableData = {
                            selected_draggable: null,
                            selected_droppable: null,
                            target_droppable: null
                        }
                    } else {
                        draggableData.selected_draggable = null
                        draggableData.selected_droppable = null
                        draggableData.target_droppable = null
                    }


                    if (config.dataModel === dataModel.WINDOW) {
                        console.log('添加到window')
                        window.draggableData.selected_draggable = e.target
                        window.draggableData.selected_droppable = e.target.parentNode
                    } else {
                        draggableData.selected_draggable = e.target
                        draggableData.selected_droppable = e.target.parentNode
                    }
                });
                //拖拽时
                draggableDiv.addEventListener('ondrag', (e) => {
                    console.log('拖拽时', e)
                    if (draggable.ondrag) {
                        draggable.ondrag(e, draggable.data);
                    }

                })
                //完成元素拖动
                draggableDiv.addEventListener('dragend', (e) => {
                    console.log('完成元素拖动', window.draggableData, e)
                    if (draggable.ondragend) {
                        draggable.ondragend(e, draggable.data);
                    }
                    const run = config.dataModel === dataModel.WINDOW ?
                        window.draggableData.target_droppable
                        && window.draggableData.selected_droppable
                        && window.draggableData.selected_draggable :
                        draggableData.selected_draggable
                        && draggableData.selected_droppable
                        && draggableData.target_droppable;

                    if (run) {
                        if (config.draggableType === draggableType.SUPERIMPOSE) {
                            //叠加
                            if (config.dataModel === dataModel.WINDOW) {
                                window.draggableData.target_droppable.append(window.draggableData.selected_draggable);
                            } else {
                                draggableData.target_droppable.append(draggableData.selected_draggable);
                            }
                        } else if (config.draggableType === draggableType.REPLACE) {
                            //替换
                            let childNodes
                            if (config.dataModel === dataModel.WINDOW) {
                                childNodes = window.draggableData.target_droppable.childNodes;
                            } else {
                                childNodes = draggableData.target_droppable.childNodes;
                            }
                            console.log("子元素", childNodes, childNodes.length)
                            for (let j = 0; j < childNodes.length; j++) {
                                console.log(childNodes[j])
                                if (config.dataModel === dataModel.WINDOW) {
                                    console.log("window add ")
                                    window.draggableData.selected_droppable.append(childNodes[j]);
                                } else {
                                    draggableData.selected_droppable.append(childNodes[j]);
                                }
                            }
                            if (config.dataModel === dataModel.WINDOW) {
                                window.draggableData.target_droppable.append(window.draggableData.selected_draggable);
                            } else {
                                draggableData.target_droppable.append(draggableData.selected_draggable);
                            }
                        }
                    }


                    if (config.dataModel === dataModel.WINDOW) {
                        window.draggableData = {
                            selected_draggable: null,
                            selected_droppable: null,
                            target_droppable: null
                        }
                    } else {
                        draggableData.selected_draggable = null
                        draggableData.selected_droppable = null
                        draggableData.target_droppable = null
                    }

                });

                draggableDiv.style.backgroundImage = 'url(http://source.unsplash.com/random/50x50' + "?" + draggable.key + ")"

                droppableDiv.appendChild(draggableDiv)
            }

            mainDivDom.appendChild(droppableDiv)

        }

        parentElement.appendChild(mainDivDom)
    }
})()

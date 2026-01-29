<core:FragmentDefinition
    xmlns="sap.m"
    xmlns:core="sap.ui.core"
    xmlns:viz="sap.viz.ui5.controls"
    xmlns:viz.data="sap.viz.ui5.data"
    xmlns:viz.feeds="sap.viz.ui5.controls.common.feeds"
    xmlns:l="sap.ui.layout">

    <Dialog
        id="realTimeGraphDialog"
        title="Real Time % for 2023"
        contentWidth="90%"
        contentHeight="90%"
        resizable="true"
        draggable="true"
        stretchOnPhone="true">

        <content>

            <VBox width="100%" class="sapUiSmallMargin">

                <!-- =================== CHART =================== -->
                <viz:VizFrame
                    id="realTimeVizFrame"
                    vizType="dual_line"
                    width="100%"
                    height="420px"
                    uiConfig="{applicationSet:'fiori'}">

                    <!-- Dataset -->
                    <viz:data>
                        <viz.data:FlattenedDataset data="{/graphData}">
                            <viz.data:dimensions>
                                <viz.data:DimensionDefinition
                                    name="Month"
                                    value="{Month}"/>
                            </viz.data:dimensions>

                            <viz.data:measures>
                                <viz.data:MeasureDefinition
                                    name="Real Time %"
                                    value="{RealTime}"/>
                                <viz.data:MeasureDefinition
                                    name="Real Time Overtime %"
                                    value="{Overtime}"/>
                            </viz.data:measures>
                        </viz.data:FlattenedDataset>
                    </viz:data>

                    <!-- Feeds -->
                    <viz:feeds>
                        <viz.feeds:FeedItem
                            uid="valueAxis"
                            type="Measure"
                            values="Real Time %"/>

                        <viz.feeds:FeedItem
                            uid="valueAxis2"
                            type="Measure"
                            values="Real Time Overtime %"/>

                        <viz.feeds:FeedItem
                            uid="categoryAxis"
                            type="Dimension"
                            values="Month"/>
                    </viz:feeds>
                </viz:VizFrame>

                <!-- =================== TABLE BELOW CHART =================== -->
                <Table
                    inset="false"
                    width="100%"
                    class="sapUiSmallMarginTop">

                    <columns>
                        <Column><Text text="Month"/></Column>
                        <Column hAlign="End"><Text text="Real Time %"/></Column>
                        <Column hAlign="End"><Text text="Real Time Overtime %"/></Column>
                    </columns>

                    <items>
                        <ColumnListItem>
                            <cells>
                                <Text text="{Month}"/>
                                <Text text="{RealTime}"/>
                                <Text text="{Overtime}"/>
                            </cells>
                        </ColumnListItem>
                    </items>
                </Table>

            </VBox>

        </content>

        <!-- =================== FOOTER =================== -->
        <endButton>
            <Button
                text="Close"
                type="Emphasized"
                press=".onCloseGraphDialog"/>
        </endButton>

    </Dialog>

</core:FragmentDefinition>

function SidePageEleven() {
    const iframePart = () => {
        return {
          __html:
            '<iframe src="https://prod-apnortheast-a.online.tableau.com/t/minju/views/3/1_2?:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link&:embed=true" style="display:block; width:100vw; height: 100vh"></iframe>',
        };
    }

    return <div dangerouslySetInnerHTML={iframePart()} />;

}

export default SidePageEleven;
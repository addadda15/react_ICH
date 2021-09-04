function SidePageThree() {
    const iframePart = () => {
        return {
          __html:
            '<iframe src="https://prod-apnortheast-a.online.tableau.com/t/minju/views/__16302419245260/2_1?:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link&:embed=true" style="display:block; width:90vw; height: 100vh"></iframe>',
        };
    }

    return <div dangerouslySetInnerHTML={iframePart()} />;

}

export default SidePageThree;
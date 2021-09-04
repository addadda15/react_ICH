function SidePageFourteen() {
    const iframePart = () => {
        return {
          __html:
            '<iframe src="https://prod-apnortheast-a.online.tableau.com/t/minju/views/__16302418149540/2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=true" style="display:block; width:90vw; height: 100vh"></iframe>',
        };
    }

    return <div dangerouslySetInnerHTML={iframePart()} />;

}

export default SidePageFourteen;
const StudentHomePage = () => {
    return (
        <>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-gray-300" />
                <div className="aspect-video rounded-xl bg-gray-300" />
                <div className="aspect-video rounded-xl bg-gray-300" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-gray-300 md:min-h-min"></div>
        </>
    );
};

export default StudentHomePage;

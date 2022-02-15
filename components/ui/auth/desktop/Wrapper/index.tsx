import LeftArrow from 'assets/svg/left-arrow.svg';

const Wrapper = ({ title, description, Icon, setPage, Tpage, children }: any) => {
    return (
        <div className="z-20 flex h-screen w-screen items-center bg-[#F5F5F5] px-10 py-20 xl:px-20 xl:py-20">
            <div
                className="relative m-auto flex h-full rounded-sm bg-white md:h-[620px] lg:h-full"
                style={{ contain: 'content', width: '100%', maxWidth: '1170px' }}
            >
                <div className="flex w-1/2 p-2">{Icon}</div>
                <div
                    className="absolute -left-0 z-10 flex w-1/2 items-center justify-center bg-[#E0EFFE]"
                    style={{
                        width: '50%',
                        height: '128%',
                        top: '-15%',
                        borderTopRightRadius: '150%',
                        borderBottomRightRadius: '150%',
                    }}
                >
                    <div className="z-20 mx-7 flex h-96 w-[270px] flex-col justify-evenly rounded px-6 py-3 sm:z-20 sm:bg-white md:px-[30px] lg:z-20 lg:mx-12 xl:ml-10 xl:h-[460px] xl:w-[370px]">
                        <div className="flex h-28 flex-col justify-around">
                            <h1 className="flex font-bold">{title}</h1>
                            <p className="text-gray-460 text-base font-thin">{description}</p>
                        </div>

                        <div>{children}</div>
                        {Tpage == 1 ? (
                            <div className="flex w-full justify-end text-blue">
                                <a
                                    href="https://ivabit.io/policy/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <small className="mx-2">{'قوانین و مقررات'}</small>
                                </a>
                            </div>
                        ) : (
                            <div className="flex w-full cursor-pointer items-center justify-end text-blue">
                                <small
                                    onClick={() => setPage(1)}
                                    className="mx-2 my-2 flex w-full justify-end"
                                >
                                    {'بازگشت'}
                                </small>{' '}
                                <LeftArrow />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Wrapper;

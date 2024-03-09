import { Button } from '../Button/Button';
import { FirmFactCard } from '../FirmFactCard/FirmFactCard';
import styles from './firm-facts.module.scss';

export const FirmFacts = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <svg className={styles.closeIcon} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Close" fillRule="evenodd" clipRule="evenodd" d="M1.0808 0L0 1.08227L20.9192 22.0299L0.0597062 42.9177L1.14051 44L22 23.1122L42.8595 44L43.9403 42.9177L23.0808 22.0299L44 1.08227L42.9192 0L22 20.9476L1.0808 0Z" fill="white" />
                </svg>
            </div>
            <div className="content">
                <h1>Firm Facts</h1>
                <hr />
                <div className={styles.grid}>
                    <FirmFactCard>
                        <Button variant="icon">
                            <Icon />
                            <span>This is a two line button that terminates with</span></Button>
                    </FirmFactCard>
                    <FirmFactCard>
                        <Button variant="icon">
                            <Icon />
                            <span>This is a two line button that terminates with ellipsis</span></Button>
                    </FirmFactCard>
                    <FirmFactCard>
                        <Button><span>This is a one line button</span></Button>
                    </FirmFactCard>
                    <FirmFactCard>
                        <Button variant="icon">
                            <Icon />
                            <span>This is a two line button that terminates with ellipsis</span></Button>
                    </FirmFactCard>
                    <FirmFactCard variant="border">
                        <Button variant="icon">
                            <Icon />
                            <span>This is a two line button that terminates with ellipsis</span></Button>
                    </FirmFactCard>
                    <FirmFactCard variant='border'>
                        <Button variant="icon" disabled>
                            <Icon />
                            <span>This is a two line button that terminates with ellipsis</span></Button>
                    </FirmFactCard>
                    <FirmFactCard variant='border'>
                        <Button variant="icon">
                            <Icon />
                            <span>This is a two line button that terminates with ellipsis</span></Button>
                    </FirmFactCard>
                </div>
            </div>

        </div>
    )
}


function Icon() {
    return (
        <svg  className={styles.icon} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.6324 14.9309L21.8485 20.1471C22.0505 20.349 22.0505 20.6756 21.8485 20.8775L20.8775 21.8485C20.6756 22.0505 20.349 22.0505 20.1471 21.8485L14.9309 16.6324C14.8364 16.5336 14.7805 16.4047 14.7805 16.2672V15.7C13.2122 17.0535 11.1713 17.8741 8.93706 17.8741C4.0002 17.8741 0 13.8739 0 8.93706C0 4.0002 4.0002 0 8.93706 0C13.8739 0 17.8741 4.0002 17.8741 8.93706C17.8741 11.1713 17.0535 13.2122 15.7 14.7805H16.2672C16.4047 14.7805 16.5336 14.8321 16.6324 14.9309ZM2.0624 8.93706C2.0624 12.7353 5.13881 15.8117 8.93706 15.8117C12.7353 15.8117 15.8117 12.7353 15.8117 8.93706C15.8117 5.13881 12.7353 2.0624 8.93706 2.0624C5.13881 2.0624 2.0624 5.13881 2.0624 8.93706Z" fill="white" />
        </svg>
    )
}

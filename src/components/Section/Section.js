import { FeedbackTitle, SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <SectionWrapper>
            <div>
                <FeedbackTitle>{title}</FeedbackTitle>
                {children}
            </div>
        </SectionWrapper>
    );
};
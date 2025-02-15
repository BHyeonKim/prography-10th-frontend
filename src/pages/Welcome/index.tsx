import WelcomeComponent from '../../entities/welcome/ui';
import ApplyButton from '../../entities/welcome/ui/Button';
import Logo from '../../shared/ui/logo/Logo';

import styles from './welcome.module.css';

const WelcomePage = () => {
	return (
		<main className={styles.page}>
			<Logo />
			<WelcomeComponent.WelcomeTitle>
				안녕하세요. 새로운 가치를 만들어가는 IT커뮤니티, Prography 입니다.
			</WelcomeComponent.WelcomeTitle>
			<WelcomeComponent.WelcomeSubtitle>
				드디어 Prography 10기 모집이 시작되었습니다.
			</WelcomeComponent.WelcomeSubtitle>
			<WelcomeComponent.WelcomeParagraph>
				Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring)
				총 6개의 파트를 모집합니다.
			</WelcomeComponent.WelcomeParagraph>
			<section className={styles.section}>
				<WelcomeComponent.WelcomeParagraph>
					✓ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,
				</WelcomeComponent.WelcomeParagraph>
				<WelcomeComponent.WelcomeParagraph>
					✓ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,
				</WelcomeComponent.WelcomeParagraph>
				<WelcomeComponent.WelcomeParagraph>
					✓ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,
				</WelcomeComponent.WelcomeParagraph>
			</section>
			<section className={styles.section}>
				<WelcomeComponent.WelcomeSubtitle>
					"프로답게, 재미있게"
				</WelcomeComponent.WelcomeSubtitle>
				<WelcomeComponent.WelcomeParagraph>
					재미있는 작당을 함께 만들어갈 10기에 합류하세요.
				</WelcomeComponent.WelcomeParagraph>
			</section>
			<section className={styles.section}>
				<WelcomeComponent.WelcomeParagraph>
					📌자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요
				</WelcomeComponent.WelcomeParagraph>
				<WelcomeComponent.WelcomeLink to="https://prography.org/about">
					프로그라피 10기 모집 자세히 알아보기
				</WelcomeComponent.WelcomeLink>
				<WelcomeComponent.WelcomeLink to="https://prography.org/">
					🏡 공식 홈페이지
				</WelcomeComponent.WelcomeLink>
				<WelcomeComponent.WelcomeLink to="https://www.instagram.com/prography_official/">
					🔗 인스타그램
				</WelcomeComponent.WelcomeLink>
			</section>
			<ApplyButton to="/registration/1">지원하기</ApplyButton>
		</main>
	);
};

export default WelcomePage;

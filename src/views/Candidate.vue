<template>
  <MainLayout selectedMenu="candidates" username="Jane Doe">
    <!-- Header Section with background -->
    <div class="candidate-header-bg">
      <div class="candidate-header-row">
        <div class="candidate-header-left">
          <a-breadcrumb style="margin-bottom: 8px;">
            <a-breadcrumb-item> Candidates </a-breadcrumb-item>
            <a-breadcrumb-item> John Doe </a-breadcrumb-item>
          </a-breadcrumb>
          <div class="candidate-header-main">
            <a-avatar size="large" class="candidate-avatar">JD</a-avatar>
            <div class="candidate-header-info">
              <div class="candidate-header-title-row">
                <a-typography-title level="4" style="margin-bottom: 0;">John Doe</a-typography-title>
                <a-tag color="blue">INTERVIEW</a-tag>
              </div>
              <div class="candidate-header-contact">
                <a-typography-text>johndoe@gmail.com</a-typography-text>
                <a-typography-text style="margin-left: 16px;">+250 758 492 456</a-typography-text>
                <a-space style="margin-left: 16px;">
                  <a href="#" target="_blank"><TwitterOutlined style="font-size: 20px; color: #1D3557;" /></a>
                  <a href="#" target="_blank"><LinkedinFilled style="font-size: 20px; color: #1D3557;" /></a>
                  <a href="#" target="_blank"><GithubFilled style="font-size: 20px; color: #1D3557;" /></a>
                </a-space>
              </div>
            </div>
          </div>
        </div>
        <!-- Current Status Box -->
        <div class="candidate-header-status">
          <a-card size="small" class="status-card">
            <div class="status-title">Current Status</div>
            <div class="status-row"><span class="status-label">Round:</span> <span class="status-value">Technical</span></div>
            <div class="status-row"><span class="status-label">Assigned to:</span> <span class="status-value">John Doe</span></div>
            <div class="status-row"><span class="status-label">Interview Date:</span> <span class="status-value">Jul 30, 2024</span></div>
          </a-card>
        </div>
      </div>
    </div>

    <a-row :gutter="[24, 24]" style="margin-top: 24px;">
      <!-- Main Tabs -->
      <a-col :span="17">
        <a-card>
          <a-tabs default-active-key="general">
            <a-tab-pane key="general" tab="General">
              <!-- Candidate Files (static) -->
              <div style="margin-bottom: 16px;">
                <a-typography-title level="5">Candidate Files</a-typography-title>
                <a-space>
                  <a-tag closable>Cover_letter.pdf</a-tag>
                  <a-tag closable>My_resume.pdf</a-tag>
                  <a-tag closable>Oct_payslip.pdf</a-tag>
                </a-space>
              </div>
              <!-- Last Experience (static) -->
              <div>
                <a-typography-title level="5">Last Experience</a-typography-title>
                <a-typography-title level="5" style="margin-bottom: 0;">Senior Data Analyst</a-typography-title>
                <a-typography-text>Alight (May 2021 – Present)</a-typography-text>
                <a-typography-paragraph style="margin-top: 8px;">
                  <b>Responsible for:</b>
                  <ul>
                    <li>Data Exploration and Analysis: They perform exploratory data analysis to uncover insights, trends, and patterns in the data, often using statistical and visualisation techniques.</li>
                    <li>Data Cleaning and Preprocessing: Data analysts are responsible for cleaning and preparing raw renewable data to ensure its accuracy and reliability for analysis.</li>
                    <li>Reporting and Communication: Data analysts communicate their findings through reports, dashboards, and presentations to help stakeholders make informed decisions based on the data-driven insights.</li>
                  </ul>
                </a-typography-paragraph>
                <a-typography-title level="5" style="margin-bottom: 0;">Junior Data Analyst</a-typography-title>
                <a-typography-text>Alight (May 2020 – May 2021)</a-typography-text>
                <a-typography-paragraph style="margin-top: 8px;">
                  <b>Responsible for:</b>
                  <ul>
                    <li>Data Exploration and Analysis: They perform exploratory data analysis to uncover insights, trends, and patterns in the data, often using statistical and visualisation techniques.</li>
                    <li>Data Cleaning and Preprocessing: Data analysts are responsible for cleaning and preparing raw renewable data to ensure its accuracy and reliability for analysis.</li>
                    <li>Reporting and Communication: Data analysts communicate their findings through reports, dashboards, and presentations to help stakeholders make informed decisions based on the data-driven insights.</li>
                  </ul>
                </a-typography-paragraph>
              </div>
            </a-tab-pane>
            <a-tab-pane key="evaluations" tab="Evaluations">
              <div style="padding: 24px 0; text-align: center; color: #aaa;">No evaluation data yet.</div>
            </a-tab-pane>
            <a-tab-pane key="experience" tab="Experience">
              <div style="padding: 24px 0; text-align: center; color: #aaa;">No experience data yet.</div>
            </a-tab-pane>
            <a-tab-pane key="events" tab="Events">
              <div style="padding: 24px 0; text-align: center; color: #aaa;">No event data yet.</div>
            </a-tab-pane>
            <a-tab-pane key="documents" tab="Documents">
              <div style="padding: 24px 0; text-align: center; color: #aaa;">No document data yet.</div>
            </a-tab-pane>
            <a-tab-pane key="messages" tab="Messages">
              <div style="padding: 24px 0; text-align: center; color: #aaa;">No messages yet.</div>
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>

      <!-- Sidebar: Potential Fit (static, with conditional icons/colors) -->
      <a-col :span="7">
        <a-card>
          <div style="text-align: center; margin-bottom: 16px;">
            <a-progress type="dashboard" :percent="75" width="120" stroke-color="#52C41A" />
            <div style="margin-top: 8px;">
              <a-typography-text strong>Score: </a-typography-text>
              <a-typography-text style="color: #52C41A;">Potential Fit</a-typography-text>
            </div>
          </div>
          <a-list bordered size="small" style="background: #f8f9fa;">
            <a-list-item v-for="item in qualifications" :key="item.name">
              {{ item.name }}
              <CheckCircleFilled v-if="item.passed" :style="{ color: '#52C41A', marginLeft: '8px' }" />
              <CloseCircleFilled v-else :style="{ color: '#FF4D4F', marginLeft: '8px' }" />
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import { CheckCircleFilled, CloseCircleFilled, TwitterOutlined, LinkedinFilled, GithubFilled } from '@ant-design/icons-vue';

export default {
  name: 'CandidateView',
  components: { MainLayout, CheckCircleFilled, CloseCircleFilled, TwitterOutlined, LinkedinFilled, GithubFilled },
  data() {
    return {
      qualifications: [
        { name: 'Qualifications and skills match', passed: true },
        { name: 'Experience Relevance', passed: true },
        { name: 'Education', passed: true },
        { name: 'Keywords Match', passed: false },
        { name: 'Years of Experience', passed: true },
        { name: 'Job Hopping', passed: true },
        { name: 'Cultural Fit', passed: true },
        { name: 'Interview Performance', passed: true },
        { name: 'References', passed: false },
        { name: 'Additional Factors', passed: false }
      ]
    }
  }
}
</script>

<style scoped>
.candidate-header-bg {
  background: #EBF4FF;
  padding: 32px 40px 24px 40px;
  border-radius: 0 0 16px 16px;
  margin-bottom: 24px;
}
.candidate-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
}
.candidate-header-left {
  flex: 1;
}
.candidate-header-main {
  display: flex;
  align-items: center;
  gap: 24px;
}
.candidate-avatar {
  background: #1D3557 !important;
  font-size: 1.5rem;
}
.candidate-header-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.candidate-header-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.candidate-header-contact {
  display: flex;
  align-items: center;
  gap: 8px;
}
.candidate-header-status {
  min-width: 220px;
  max-width: 260px;
}
.status-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  padding: 16px 20px;
}
.status-title {
  font-weight: 600;
  color: #1D3557;
  margin-bottom: 8px;
}
.status-row {
  margin-bottom: 4px;
  font-size: 1rem;
}
.status-label {
  color: #888;
  font-weight: 500;
}
.status-value {
  color: #1D3557;
  font-weight: 600;
  margin-left: 8px;
}
.candidate-header-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style> 
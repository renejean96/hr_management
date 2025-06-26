// Ready for Ant Design Vue redesign

<template>
  <MainLayout selectedMenu="home" username="Jane Doe">
    <!-- Overview Cards using reusable StatsCard component -->
    <div class="require-attention-section">
      <div>
      <a-row :gutter="[24, 24]" class="overview-row">
      <a-col :span="6">
        <StatsCard 
          :iconSrc="require('@/assets/Illustrations.png')"
          :number="33" 
          title="Interview Scheduled" 
          :titleWidth="'50px'"
        />
      </a-col>
      <a-col :span="6">
        <StatsCard 
          :iconSrc="require('@/assets/svg_2.svg')"
          :number="2" 
          title="Interview Feedback Pending" 
        />
      </a-col>
      <a-col :span="6">
        <StatsCard 
          :iconSrc="require('@/assets/3_svg.svg')"
          :number="44" 
          title="Approval Pending" 
        />
      </a-col>
      <a-col :span="6">
        <StatsCard 
          :iconSrc="require('@/assets/4_svg.svg')"
          :number="13" 
          title="Offer Acceptance Pending" 
        />
      </a-col>
      <a-col :span="6">
        <StatsCard 
          :iconSrc="require('@/assets/5_svg.svg')"
          :number="17" 
          title="Documentations Pending" 
        />
      </a-col>
      <a-col :span="6">
        <StatsCard 
          :iconSrc="require('@/assets/6_svg.svg')"
          :number="3" 
          title="Training Pending" 
        />
      </a-col>
      <a-col :span="6">
        <StatsCard 
          :iconSrc="require('@/assets/7_svg.svg')"
          :number="5" 
          title="Supervisor Allocation Pending" 
        />
      </a-col>
      <a-col :span="6">
        <StatsCard 
          :iconSrc="require('@/assets/8_svg.svg')"
          :number="56" 
          title="Project Allocation Pending" 
        />
      </a-col>
    </a-row>
      <a-tabs default-active-key="jobs" class="require-tabs">
        <a-tab-pane key="jobs" tab="Jobs">
          <div class="jobs-table-wrapper">
            <table class="jobs-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Positions Left</th>
                  <th>Applicants</th>
                  <th>Interviewed</th>
                  <th>Rejected</th>
                  <th>Feedback Pending</th>
                  <th>Offered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Senior Data Analyst</td>
                  <td>3</td>
                  <td>123</td>
                  <td>33</td>
                  <td>7</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Junior Data Analyst</td>
                  <td>7</td>
                  <td>567</td>
                  <td>22</td>
                  <td>33</td>
                  <td>7</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Product Designer</td>
                  <td>2</td>
                  <td>201</td>
                  <td>32</td>
                  <td>8</td>
                  <td>2</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Java Developer</td>
                  <td>5</td>
                  <td>201</td>
                  <td>32</td>
                  <td>8</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Product Manager</td>
                  <td>4</td>
                  <td>41</td>
                  <td>9</td>
                  <td>3</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="candidates" tab="Candidates">
          <div style="padding: 24px 0; text-align: center; color: #aaa;">No candidate data yet.</div>
        </a-tab-pane>
        <a-tab-pane key="onboardings" tab="Onboardings">
          <div style="padding: 24px 0; text-align: center; color: #aaa;">No onboarding data yet.</div>
        </a-tab-pane>
      </a-tabs>
      </div>
      <div class="meetings-section-wrapper">
        <a-card title="Upcoming Meetings" class="meetings-card">
          <div class="meetings-section">
            <div class="meetings-section-title">Today</div>
            <a-list :split="false" size="small">
              <a-list-item>10:00 - Mini Somers, NodeJS dev: 4th phase</a-list-item>
              <a-list-item>11:00 - Mini Somers, NodeJS dev: 4th phase</a-list-item>
              <a-list-item>14:00 - Mini Somers, NodeJS dev: 4th phase</a-list-item>
            </a-list>
          </div>
          <div class="meetings-section">
            <div class="meetings-section-title">Tomorrow</div>
            <a-list :split="false" size="small">
              <a-list-item>09:00 - Mini Somers, NodeJS dev: 4th phase</a-list-item>
              <a-list-item>13:00 - Mini Somers, NodeJS dev: 4th phase</a-list-item>
            </a-list>
          </div>
          <div class="meetings-section">
            <div class="meetings-section-title">This Week</div>
            <a-list :split="false" size="small">
              <a-list-item>Sep 5 - Mini Somers, NodeJS dev: 4th phase</a-list-item>
              <a-list-item>Sep 6 - Mini Somers, NodeJS dev: 4th phase</a-list-item>
              <a-list-item>Sep 7 - Mini Somers, NodeJS dev: 4th phase</a-list-item>
            </a-list>
          </div>
        </a-card>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import StatsCard from '@/components/StatsCard.vue';

export default {
  name: 'HomeView',
  components: { MainLayout, StatsCard }
}
</script>

<style scoped>
.main-content {
  background: #F7F9FB;
  min-height: 100vh;
  padding: 32px 40px;
}
.overview-row {
  margin-bottom: 32px;
}
.require-attention-section {
  display: flex;
  gap: 24px;
  margin-top: 32px;
}
.require-tabs {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  padding: 24px;
}
.jobs-table-wrapper {
  overflow-x: auto;
}
.jobs-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}
.jobs-table th, .jobs-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #f0f0f0;
  text-align: left;
}
.jobs-table th {
  background: #F7F9FB;
  color: #1D3557;
  font-weight: 600;
}
.meetings-section-wrapper {
  width: 340px;
  min-width: 300px;
}
.meetings-card {
  min-height: 400px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}
.meetings-section {
  margin-bottom: 16px;
}
.meetings-section-title {
  font-weight: 600;
  color: #1D3557;
  margin-bottom: 4px;
}
</style> 
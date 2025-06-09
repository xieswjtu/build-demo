<template>
    <div class="contact-container">
        <div class="box">
            <a>
                <div class="icon">
                    <Icon :type=iconType />
                </div>
                <div>
                    {{ text }}
                </div>
            </a>
            <div class="pop">
                <img src= "@/asset/image/wx.jpg" />
            </div>
        </div>
    </div>
</template>

<script >
import Icon from '@/component/Icon'

export default {
    props: {
        text: {
            type: String,
            default: ""
        },
        iconType: {
            type: String,
            default: "user"
        },

    },
    components: {
        Icon
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container{

    margin: 0;
    color: @gray;
    @itemHeight: 30px;
    .box {
        height: @itemHeight - 5px;
        line-height: 30px;
        margin: 14px 0;
        cursor: pointer;
        position: relative;
        text-indent: 20px;
        &:hover{
            .pop {
                transform: scaleY(1);
            }
        }
        a {
            display: flex;
            font-size: 16px;
            align-items: center;
            .icon {
            margin-right: 8px;
            }
        }
        .pop {
            position: absolute;
            left:28px;
            bottom: @itemHeight;
            padding: 10px 15px;
            background:  #fff;
            border-radius: 5px;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: 0.5s;
            img {
                height: 150px;
                width: 150px;
            }
            &::after {
                content: "";
                position: absolute;
                left: 50%;
                transform: translateX(-50%) rotate(45deg);
                width: 8px;
                height: 8px;
                background: #fff;
                bottom: -4px;
            }
        }
    }
}

</style>

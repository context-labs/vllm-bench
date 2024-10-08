#!/bin/bash


if [ -z "$HUGGING_FACE_HUB_TOKEN" ]; then
    echo "Warning: HUGGING_FACE_HUB_TOKEN is not set. Please set this environment variable before running the script."
    exit 1
fi


sudo docker run \
    --runtime nvidia \
    --gpus all \
    -v ~/.cache/huggingface:/root/.cache/huggingface \
    --env HUGGING_FACE_HUB_TOKEN=$(echo $HUGGING_FACE_HUB_TOKEN) \
    -p 8000:8000 \
    --ipc=host \
    vllm/vllm-openai:latest \
    --gpu-memory-utilization 0.45 \
    --model neuralmagic/Meta-Llama-3.1-8B-Instruct-FP8 \
    --max-num-seqs 1024 \
    --max-num-batched-tokens 1024
    